"use client";

import { InvoiceHeader } from "@/components/features/headers/invoiceHeader";
import { Back } from "../../../../(bank)/diligence/banks/[id]/back";
import { Button } from "@/components/ui/button";
import CMTable from "@/components/features/cmTable";
import { dataBody, headers } from "./constants";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useEnterprise } from "@/hooks";
import { format, parseJSON } from "date-fns";
import numeral from "numeral";

export default function InvoicePage({ params }: { params: { id: string } }) {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(params.id);
  const selectedEnterprise = enterpriseById.data?.data.data;

  const completedRequests = selectedEnterprise?.diligenceRequest.filter(
    (el) => el.status === "Completed"
  );

  return (
    <div className="pl-10 pr-6 max-h-[calc(100vh-61px)] overflow-auto">
      <div className="sticky top-0 z-10 pt-4 bg-white border-b border-border">
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
      </div>
      <div className="relative">
        <InvoiceHeader
          logo={selectedEnterprise?.logo || ""}
          name={selectedEnterprise?.name || "--"}
          dateJoined={selectedEnterprise?.createdAt || ""}
        />
        <div className="w-11/12 mx-auto -translate-y-20">
          <CMTable
            header={headers}
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
        </div>
      </div>
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
