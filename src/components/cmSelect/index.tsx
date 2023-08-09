"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { allMonths } from "@/lib/config";

const CMSelect = ({
  label,
  placeholder,
  options,
  handleSelect,
  className,
  defaultValue,
  valueLabel,
}: {
  label?: string;
  placeholder: any;
  options: string[];
  handleSelect?: (v: any) => void;
  className?: { trigger?: string };
  defaultValue?: string;
  valueLabel?: string;
}) => {
  return (
    <Select onValueChange={handleSelect} defaultValue={defaultValue}>
      <SelectTrigger
        className={cn(
          buttonVariants({
            variant: "outline",
            className: cn("bg-transparent text-white", className?.trigger),
          })
        )}
      >
        <p className="mr-2">{valueLabel}</p>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, i) => (
            <SelectItem key={i} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CMSelect;
