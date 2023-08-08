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
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { cmFieldPropType } from "./constants";

const InputWithLabel = ({
  form,
  name,
  label,
  tipText,
  type,
  placeholder,
  textSize,
  bottom,
}: cmFieldPropType) => {
  const [typeM, setTypeM] = useState(type);

  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(name, formState);

  const Tooltip = (
    <CMToolTip
      content={<p className={`text-sm text-cm-black-400`}>{tipText}</p>}
      trigger={<BsInfoCircle className={`relative text-cm-black-400 `} />}
    />
  );

  const toggleType = () => setTypeM(typeM === "password" ? "text" : "password");

  const Password = (
    <p className="absolute right-2 cursor-pointer text-sm " onClick={toggleType}>
      {typeM === "password" ? "Show" : "Hide"}
    </p>
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col justify-center !mt-0 `}>
          <div className="flex justify-between gap-4 mb-2 w-full">
            <div className={`flex justify-start items-center gap-2 text-sm `}>
              <FormLabel className={`text-sm leading-3 font-normal text-label ${textSize} `}>
                {label}
              </FormLabel>
              {tipText && Tooltip}
            </div>
            <FormMessage className={`min-w-max text-sm leading-3 font-normal ${textSize}`} />
          </div>
          <FormControl>
            <div className="flex items-center !mt-0 relative ">
              <Input
                type={typeM}
                placeholder={placeholder}
                {...field}
                className={cn(
                  `placeholder:text-sm ${textSize && `placeholder:${textSize}`}`,
                  type === "password" && "pr-12"
                )}
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
