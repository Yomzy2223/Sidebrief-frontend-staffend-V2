"use client";

import { Dialog } from "@/components/customdialog";
import { AddOrEditBankForm } from "./Form";
import type { IBank } from "@/types/returns";
import { useState } from "react";

type addEditBankProps = {
  triggerText: string;
  variant: "add" | "edit";
} & (
  | {
      variant: "edit";
      bankname: string;
      adminEmail: string;
      address: string;
      bankId: string;
    }
  | { variant: "add"; banks: IBank[] }
);

export const AddOrEditBank = (props: addEditBankProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      dialogType="normal"
      triggerText={props.triggerText}
      footer={false}
      title={props.variant === "edit" ? props.bankname : "Add new Enterprise"}
      open={open}
      setter={(a: boolean) => setOpen(a)}
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
          }
        }
      />
    </Dialog>
  );
};
