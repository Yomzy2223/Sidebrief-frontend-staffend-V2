"use client";

import CMToolTip from "@/components/cmTooltip";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { cmFieldPropType } from "./constants";
import infoIcon from "@/assets/icons/info.svg";

const InputWithLabel = ({
  form,
  name,
  label,
  tipText,
  type,
  placeholder,
  className,
  bottom,
}: cmFieldPropType) => {
  const [typeM, setTypeM] = useState(type);

  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(name, formState);

  const toggleType = () => setTypeM(typeM === "password" ? "text" : "password");

  const Password = (
    <p
      className="absolute right-2 cursor-pointer text-sm "
      onClick={toggleType}
    >
      {typeM === "password" ? "Show" : "Hide"}
    </p>
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-col justify-center !mt-0 w-full",
            className?.formItem
          )}
        >
          <div className="flex justify-between gap-4 mb-2 w-full">
            <div className={`flex justify-start items-center gap-2 text-sm `}>
              <FormLabel
                className={cn(
                  "text-base leading-3 font-normal text-foreground-grey",
                  className?.label
                )}
              >
                {label}
              </FormLabel>
              {tipText && <Tooltip tipText={tipText} />}
            </div>
            <FormMessage
              className={cn(
                "min-w-max text-base leading-3 font-normal",
                className?.message
              )}
            />
          </div>
          <FormControl>
            <div className="flex items-center !mt-0 relative ">
              <Input
                type={typeM}
                placeholder={placeholder}
                {...field}
                className={className?.input}
                error={fieldState.invalid}
              />
              {type === "password" && Password}
            </div>
          </FormControl>
          {bottom}
        </FormItem>
      )}
    />
  );
};

export default InputWithLabel;

const Tooltip = ({ tipText }: { tipText: string }) => (
  <CMToolTip
    content={<p className={`text-sm text-muted-foreground`}>{tipText}</p>}
    trigger={<Image src={infoIcon} alt="" />}
  />
);
