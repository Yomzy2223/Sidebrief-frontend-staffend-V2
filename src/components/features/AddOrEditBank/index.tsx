"use client";

import { Dialog } from "@/components/customdialog";
import { AddOrEditBankForm } from "./Form";
import type { IBank } from "@/types/returns";
import { ReactNode, useState } from "react";
import { useMediaQuery } from "@/hooks";
import { Button } from "@/components/ui/button";
import Drawer from "react-modern-drawer";
import { ArrowLeft } from "lucide-react";

type addEditBankProps = {
  triggerText: string | ReactNode;
  variant: "add" | "edit";
} & (
  | {
      variant: "edit";
      bankname: string;
      adminEmail: string;
      address: string;
      bankId: string;
      color: string;
      logo: string;
    }
  | { variant: "add"; banks: IBank[] }
);

export const AddOrEditBank = (props: addEditBankProps) => {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {matches ? (
        <Dialog
          dialogType="normal"
          triggerText={props.triggerText}
          footer={false}
          title={props.variant === "edit" ? props.bankname : "Add new Enterprise"}
          open={open}
          setter={(a: boolean) => setOpen(a)}
          triggerVariant={
            props.variant === "add"
              ? {
                  variant: !matches ? "ghost" : "default",
                  size: matches ? "lg" : "slim",
                }
              : {
                  variant: "outline-primary",
                  size: "lg",
                }
          }
        >
          <AddOrEditBankForm
            isAdd={props.variant === "add"}
            cancelModal={() => setOpen(false)}
            banks={
              props.variant === "add"
                ? props.banks
                : [
                    {
                      id: props.bankId,
                      name: props.bankname,
                      color: null,
                      slug: "",
                      logo: "",
                      createdAt: "",
                      updatedAt: "",
                    },
                  ]
            }
            details={
              props.variant === "edit" && {
                adminEmail: props.adminEmail,
                address: props.address,
                color: props.color,
                logo: props.logo,
              }
            }
          />
        </Dialog>
      ) : (
        <div>
          <Button variant={"ghost"} size="slim" onClick={() => setOpen(true)}>
            {props.triggerText}
          </Button>
          <Drawer
            open={open}
            direction="right"
            onClose={() => setOpen(false)}
            className="!w-screen py-4 px-5"
          >
            <div className="flex items-center gap-4 mb-[35px]">
              <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(false)}>
                <ArrowLeft />
              </Button>
              <p className="text-xl font-semibold leading-6">
                {props.variant === "edit" ? props.bankname : "Add new Enterprise"}
              </p>
            </div>
            <AddOrEditBankForm
              isAdd={props.variant === "add"}
              cancelModal={() => setOpen(false)}
              banks={
                props.variant === "add"
                  ? props.banks
                  : [
                      {
                        id: props.bankId,
                        name: props.bankname,
                        color: null,
                        slug: "",
                        logo: "",
                        createdAt: "",
                        updatedAt: "",
                      },
                    ]
              }
              details={
                props.variant === "edit" && {
                  adminEmail: props.adminEmail,
                  address: props.address,
                  color: props.color,
                  logo: props.logo,
                }
              }
            />
          </Drawer>
        </div>
      )}
    </>
  );
};
