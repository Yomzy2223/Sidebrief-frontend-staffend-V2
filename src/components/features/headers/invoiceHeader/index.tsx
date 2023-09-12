"use client";

import Image from "next/image";
import React, { useState } from "react";
import sidebriefLogo from "@/assets/images/sidebrief-logo.png";
import Gtbank from "@/assets/icons/Gtbank.svg";
import CMSelect from "@/components/cmSelect";
import { allMonths, allYears } from "@/lib/config";
import { cn } from "@/lib/utils";
import InvoiceHeadImage from "@/assets/images/invoice-header-background.png";
import { useCheckIsImage } from "@/hooks";
import { format, parseJSON } from "date-fns";
import EmptyImage from "@/assets/images/emptyImage.png";

export const InvoiceHeader = ({
  logo,
  name,
  dateJoined,
}: {
  logo: string;
  name: string;
  dateJoined: string;
}) => {
  const currYear = new Date().toLocaleString("default", { year: "numeric" });
  const currMonth = new Date().toLocaleString("default", { month: "long" });

  const [month, setMonth] = useState(currMonth);
  const [paid, setPaid] = useState(false);

  const handleMonthSelect = (month: string) => {
    const monthFull = allMonths.find((el) => el.short === month)?.full;
    setMonth(monthFull || "");
  };

  const handleYearSelect = (year: string) => {};

  const imageCheck = useCheckIsImage(logo);

  const isImage: boolean = imageCheck.data;

  return (
    <div className="min-h-[499px] rounded-lg px-12 py-16 relative z-0">
      <Image src={InvoiceHeadImage} alt="" fill quality={100} />
      <div className="relative flex flex-col gap-12">
        <div className="flex items-center justify-between ">
          <Image src={sidebriefLogo} alt="" />
          <div className="flex gap-4">
            <CMSelect
              options={allMonths.map((el) => el.full)}
              placeholder="Select month"
              defaultValue={currMonth}
              handleSelect={handleMonthSelect}
              // valueLabel="Month: "
            />
            <CMSelect
              options={allYears}
              placeholder="Select year"
              defaultValue={currYear}
              handleSelect={handleYearSelect}
              // valueLabel="Year: "
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <Image
            src={isImage ? logo || EmptyImage : EmptyImage}
            alt=""
            width={64}
            height={64}
            className="object-contain w-16 h-16 "
          />
          <div className="flex flex-col justify-between ">
            <p className="text-2xl text-white ">{name}</p>
            {dateJoined !== "" ? (
              <p className="text-lg text-white ">
                Joined {format(parseJSON(dateJoined), "MMM, yyyy")}
              </p>
            ) : (
              <p>--</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-semibold text-white">Corporate Search Invoice</h3>
          {month && (
            <p className="flex items-center gap-4 text-2xl text-white ">
              {"Month of " + month}{" "}
              <span className={cn("text-destructive text-lg", paid && "text-success")}>
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
