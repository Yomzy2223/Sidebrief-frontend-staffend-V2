"use client";

import Image from "next/image";
import React, { useState } from "react";
import sidebriefLogo from "@/assets/Logo.png";
import Gtbank from "@/assets/icons/Gtbank.svg";
import CMSelect from "@/components/cmSelect";
import { allMonths, allYears } from "@/lib/config";
import { cn } from "@/lib/utils";
import InvoiceHeadImage from "@/assets/images/invoice-header-background.png";
import { buttonVariants } from "@/components/ui/button";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const InvoiceHeader = () => {
	const currYear = new Date().toLocaleString("default", { year: "numeric" });
	const currMonth = new Date().toLocaleString("default", { month: "long" });

	const [month, setMonth] = useState(currMonth);
	const [paid, setPaid] = useState(false);

	const handleMonthSelect = (month: string) => {
		const monthFull = allMonths.find((el) => el.short === month)?.full;
		setMonth(monthFull || "");
	};

	const handleYearSelect = (year: string) => {};

	return (
		<div className="min-h-[499px] rounded-lg px-12 py-16 relative z-0">
			<Image src={InvoiceHeadImage} alt="" fill quality={100} />
			<div className="relative flex flex-col gap-12">
				<div className="flex items-center justify-between ">
					<Image src={sidebriefLogo} alt="" />
					<div className="flex gap-4">
						<Select
							onValueChange={handleMonthSelect}
							defaultValue={currMonth}
						>
							<SelectTrigger
								className={cn(
									buttonVariants({
										variant: "outline",
										className: "bg-transparent text-white",
									})
								)}
							>
								<p className="mr-2">Month:</p>
								<SelectValue placeholder={"Select month"} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{allMonths
										.map((el) => el.full)
										.map((option, i) => (
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
						<Select
							onValueChange={handleYearSelect}
							defaultValue={currYear}
						>
							<SelectTrigger
								className={cn(
									buttonVariants({
										variant: "outline",
										className: "bg-transparent text-white",
									})
								)}
							>
								<p className="mr-2">Year:</p>
								<SelectValue placeholder={"Select year"} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{allYears.map((option, i) => (
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
					</div>
				</div>
				<div className="flex gap-4 ">
					<Image
						src={Gtbank}
						alt=""
						className="object-contain w-16 h-16 "
					/>
					<div className="flex flex-col justify-between ">
						<p className="text-2xl text-white ">
							Guarantee Trust Bank
						</p>
						<p className="text-lg text-white ">Joined Jan 2023</p>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h3 className="text-5xl font-semibold text-white">
						Corporate Search Invoice
					</h3>
					{month && (
						<p className="flex items-center gap-4 text-2xl text-white ">
							{"Month of " + month}{" "}
							<span
								className={cn(
									"text-destructive text-lg",
									paid && "text-success"
								)}
							>
								{paid ? "Paid" : "Not paid"}
							</span>{" "}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default InvoiceHeader;
