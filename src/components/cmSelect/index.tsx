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

const CMSelect = ({
	label,
	placeholder,
	options,
	handleSelect,
	className,
	defaultValue,
}: {
	label?: string;
	placeholder: string;
	options: string[];
	handleSelect?: (v: any) => void;
	className?: { trigger?: string };
	defaultValue?: string;
}) => {
	return (
		<Select onValueChange={handleSelect} defaultValue={defaultValue}>
			<SelectTrigger
				className={cn(
					buttonVariants({
						variant: "outline",
						className: "bg-transparent text-white",
					}),
					className?.trigger
				)}
			>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{label}</SelectLabel>
					{options.map((option, i) => (
						<SelectItem
							key={i}
							value={option}
							// className="text-white"
						>
							{option}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default CMSelect;
