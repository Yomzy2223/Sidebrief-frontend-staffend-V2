"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, WheelEvent } from "react";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import type { IBank } from "@/types/returns";
import { useEnterprise } from "@/hooks/useEnterprise";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FileUpload } from "@/components/features/fileUpload";
import { useQueryClient } from "@tanstack/react-query";
import { useCheckIsImage } from "@/hooks";

export const AddOrEditBankForm = ({
  isAdd,
  banks,
  details,
  cancelModal,
}: {
  isAdd: boolean;
  banks: IBank[];
  cancelModal?: () => void;
  details?:
    | {
        adminEmail: string;
        address: string;
        color: string;
        logo: string;
      }
    | false;
}) => {
  const [open, setOpen] = useState(false);
  const [isBank, setIsBank] = useState(false);
  const { useCreateEnterpriseMutation, useUpdateEnterpriseMutation } = useEnterprise();
  const createEnterprise = useCreateEnterpriseMutation();
  const updateEnterprise = useUpdateEnterpriseMutation();
  const queryclient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adminEmail: "",
      address: "",
      color: "",
      logo: "",
      name: "",
    },
  });

  const setForm = useCallback(() => {
    if (banks.length > 0 && details) {
      form.setValue("name", banks[0].name);
      // form.setValue("adminName", details.adminName);
      form.setValue("adminEmail", details.adminEmail);
      form.setValue("address", details.address);
      form.setValue("color", details.color);
      form.setValue("logo", details.logo);
    }
  }, [banks, form, details]);

  useEffect(() => {
    if (!isAdd) {
      setForm();
    }
  }, [isAdd, setForm]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.scrollBy({
      top: event.deltaY,
      behavior: "auto",
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isAdd) {
      const requiredData = {
        name: values.name,
        address: values.address,
        adminEmail: values.adminEmail,
        logo: values.logo,
        color: values.color,
      };
      createEnterprise.mutate(requiredData, {
        onSuccess: (data) => {
          queryclient.invalidateQueries({ queryKey: ["All Enterprise"] });
          form.reset();
          cancelModal && cancelModal();
          //TODO: toast should be called here
        },
        onError: (err) => {
          //TODO: toast should be called here
        },
      });
    } else {
      const id = banks[0].id;
      const requiredData = {
        name: values.name,
        address: values.address,
        adminEmail: values.adminEmail,
        logo: values.logo,
        color: values.color,
        enterpriseId: id,
      };
      updateEnterprise.mutate(requiredData, {
        onSuccess: (data) => {
          queryclient.invalidateQueries({ queryKey: ["Single Enterprise By Id", id] });
          cancelModal && cancelModal();
          //TODO: toast should be called here
        },
      });
    }
  }

  let logo = "";

  if (details) {
    logo = details.logo;
  }

  const imageCheck = useCheckIsImage(logo);

  const LogoCollector = ({ url }: { url: string; name: string; type: string }) => {
    form.setValue("logo", url);
  };

  return (
    <Form {...form}>
      <div className="flex items-center space-x-2">
        <Switch id="togglebank" checked={isBank} onClick={() => setIsBank((prev) => !prev)} />
        <Label htmlFor="togglebank">{isAdd ? "Add" : "Edit"} Nigerian Bank</Label>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {isBank ? (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Bank name</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between px-6 py-4 font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={!isAdd}
                      >
                        {field.value
                          ? banks.find((bank) => bank.name === field.value)?.name
                          : "Enter bank name"}
                        <ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-[430px]">
                    <Command>
                      <CommandInput placeholder="Search bank..." />
                      <CommandEmpty>No bank found.</CommandEmpty>
                      <CommandGroup
                        className="max-h-[400px] h-fit overflow-auto"
                        onWheel={handleWheel}
                      >
                        {banks.map((bank) => (
                          <CommandItem
                            value={bank.name}
                            key={bank.name}
                            onSelect={(value) => {
                              const selectedBank = banks.find(
                                (bank) => bank.name.toLowerCase() === value
                              );
                              form.setValue("name", selectedBank?.name!);
                              form.setValue("logo", selectedBank?.logo!);
                              form.setValue("color", selectedBank?.color || "#00A2D4");

                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                bank.id === field.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {bank.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <>
            {logo && imageCheck.data && (
              <div className="relative w-[100px] h-[100px] rounded-sm overflow-hidden mx-auto">
                <Image src={logo} alt={`enterprise-image`} fill />
              </div>
            )}
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isAdd ? "Logo" : "Replace Logo"}</FormLabel>
                  <FormControl>
                    <FileUpload collectFile={LogoCollector} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Enterprise name" className="px-6 py-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand color</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter brand color" className="px-6 py-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" className="px-6 py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adminEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account admin email</FormLabel>
              <FormControl>
                <Input placeholder="Enter admin email" className="px-6 py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          loading={createEnterprise.isLoading || updateEnterprise.isLoading}
        >
          {isAdd ? "Add" : "Done"}
        </Button>
      </form>
    </Form>
  );
};
