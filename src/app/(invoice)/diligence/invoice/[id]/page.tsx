"use client";

import { InvoiceHeader } from "@/components/features/headers/invoiceHeader";
import { Back } from "../../../../(enterprise)/diligence/enterprise/[id]/back";
import { Button } from "@/components/ui/button";
import CMTable from "@/components/features/cmTable";
import { dataBody, headers } from "./constants";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useEnterprise } from "@/hooks";
import { format, parseJSON } from "date-fns";
import numeral from "numeral";
import { Loader } from "@/components/features/cmTable/loader";
import { useMediaQuery } from "@/hooks";
import { NotificationCard } from "@/components/features/notifications";
import CMSelect from "@/components/cmSelect";
import { allMonths, allYears } from "@/lib/config";
import { useState } from "react";

export default function InvoicePage({ params }: { params: { id: string } }) {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(params.id);
  const selectedEnterprise = enterpriseById.data?.data.data;
  const enterpriseByIdLoading = enterpriseById?.isLoading;

  const currMonth = new Date().toLocaleString("default", { month: "long" });
  const currYear = new Date().toLocaleString("default", { year: "numeric" });

  const [month, setMonth] = useState(currMonth);

  const handleMonthSelect = (month: string) => {
    const monthFull = allMonths.find((el) => el.short === month)?.full;
    setMonth(monthFull || "");
  };

  const handleYearSelect = (year: string) => {};

  const completedRequests = selectedEnterprise?.diligenceRequest.filter(
    (el) => el.status === "Completed"
  );

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="px-5 md:pl-10 md:pr-6 max-h-[calc(100vh-61px)] overflow-auto">
      <div className="sticky top-0 z-10 pt-4 bg-white border-b-0 md:border-b border-border">
        {matches ? (
          <>
            <Back />
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="text-2xl font-semibold leading-normal">Diligence Registrations</h3>
              <div className="flex gap-6">
                <Button variant={"outline-secondary"} className="">
                  Download Invoice
                </Button>
                <Button>Send to Enterprise</Button>
              </div>
            </div>
          </>
        ) : (
          // mobile
          <div className="mb-6 space-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Back />
                <h3 className="font-semibold leading-6">Payment invoice</h3>
              </div>
              <div>
                <NotificationCard />
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant={"ghost"} size={"link"} className="">
                <p className="underline">Download Invoice</p>
              </Button>
              <Button variant={"ghost"} size={"link"}>
                <p className="font-semibold underline text-primary">Send to Enterprise</p>
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        {matches ? (
          <InvoiceHeader
            logo={selectedEnterprise?.logo || ""}
            name={selectedEnterprise?.name || "--"}
            dateJoined={selectedEnterprise?.createdAt || ""}
          />
        ) : (
          <div className="flex flex-col">
            <p className="mb-3">
              Month of June: <span className="text-[#00D448]">Paid</span>
            </p>
            <div className="flex gap-4 mb-6 overflow-x-auto">
              <TotalBlock title="Total Request Processed" text={completedRequests?.length || 0} />
              <TotalBlock title="Price for each" text="#10,000" />
              <TotalBlock
                title="Amount paid"
                text={`#${numeral((completedRequests?.length || 0) * 10000).format("0,0")}`}
              />
            </div>
            <div className="flex flex-col gap-4 p-4 mb-4 border border-border">
              <p className="font-semibold">Request(s) analysis</p>
              <div className="flex">
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
          </div>
        )}
        <div className="w-full mx-auto translate-y-0 md:w-11/12 md:-translate-y-20">
          {enterpriseById?.isLoading ? (
            <Loader />
          ) : (
            <CMTable
              header={headers}
              isLoading={enterpriseByIdLoading}
              body={
                completedRequests?.map((el, index) => [
                  index + 1,
                  el.name,
                  el.registrationNumber,
                  "Registered",
                  "#10,000",
                  el.createdBy,
                  format(parseJSON(el.createdAt), "MMMM dd (HH:mm)"),
                ]) || []
              }
            />
          )}
        </div>
      </div>
      {matches && (
        <>
          <div className="bg-secondary py-2.5">
            <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
              <TotalText weight={500}>Total Request processed</TotalText>
              <TotalText weight={400}>{completedRequests?.length || 0}</TotalText>
            </div>
            <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
              <TotalText weight={500}>Price for each</TotalText>
              <TotalText weight={400}>#10,000</TotalText>
            </div>{" "}
            <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
              <TotalText weight={500}>Amount paid</TotalText>
              <TotalText weight={600}>
                {`#${numeral((completedRequests?.length || 0) * 10000).format("0,0")}`}
              </TotalText>
            </div>
          </div>
          <div className="flex justify-end px-8 pt-12 pb-10 bg-[#FFEAE1]">
            <div className="flex gap-6">
              <Button variant={"outline"}>Download Invoice</Button>
              <Button>Send to {/* Might change later */} Enterprise</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const totalText = cva("text-white text-2xl leading-snug", {
  variants: {
    weight: {
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
    },
  },
});

const TotalText = ({
  children,
  weight,
}: { children: string | number } & VariantProps<typeof totalText>) => {
  return <p className={cn(totalText({ weight }))}>{children}</p>;
};

// absolute z-10 w-11/12 -translate-x-1/2 left-1/2 top-[412px]

const TotalBlock = ({ title, text }: { title: string; text: string | number }) => {
  return (
    <div className="border border-[#EDF1F6] p-4 w-[230px] rounded-sm flex flex-col justify-between space-y-6 shrink-0">
      <h5 className="text-sm uppercase text-foreground-grey">{title}</h5>
      <p className="text-2xl font-semibold">{text}</p>
    </div>
  );
};
