"use client";

import React, { useState } from "react";
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

const CMSelect = ({
  label,
  placeholder,
  options,
  handleSelect,
  className,
  defaultValue,
}: {
  label?: string;
  placeholder?: string;
  options: string[];
  handleSelect?: (v: any) => void;
  className?: { trigger?: string };
  defaultValue?: string;
}) => {
  
  return (
    <Select onValueChange={handleSelect} defaultValue={defaultValue}>
      <SelectTrigger
        className={cn("w-[140px] rounded-lg bg-white/50 ", className?.trigger)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option, i) => (
            <SelectItem key={i} value={option} className="!text-gray-900">
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CMSelect;
