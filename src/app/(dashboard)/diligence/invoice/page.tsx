import { InvoiceHeader } from "@/components/features/headers/invoiceHeader";
import { Back } from "../back";
import { Button } from "@/components/ui/button";
import CMTable from "@/components/features/cmTable";
import { dataBody, headers } from "./constants";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export default function InvoicePage() {
  return (
    <div className="pl-10 pr-6 max-h-[calc(100vh-61px)] overflow-auto">
      <div className="pt-4 sticky top-0 bg-white z-10 border-b border-border">
        <Back />
        <div className="flex items-center justify-between w-full mb-6">
          <h3 className="text-2xl font-semibold leading-normal">
            Diligence Registrations
          </h3>
          <div className="flex gap-6">
            <Button variant={"outline-primary"} className=" ">
              Download Invoice
            </Button>
            <Button>Send to {/* Might change later */} Bank</Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <InvoiceHeader />
        <div className="w-11/12 mx-auto -translate-y-20">
          <CMTable header={headers} body={dataBody} />
        </div>
      </div>
      <div className="bg-secondary py-2.5">
        <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
          <TotalText weight={500}>Total Request processed</TotalText>
          <TotalText weight={400}>12</TotalText>
        </div>
        <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
          <TotalText weight={500}>Price for each</TotalText>
          <TotalText weight={400}>$10,000</TotalText>
        </div>{" "}
        <div className="mx-auto max-w-[1006px] flex justify-between h-16 items-center px-6">
          <TotalText weight={500}>Amount paid</TotalText>
          <TotalText weight={600}>$120,000</TotalText>
        </div>
      </div>
      <div className="flex justify-end px-8 pt-12 pb-10 bg-[#FFEAE1]">
        <div className="flex gap-6">
          <Button variant={"outline"}>Download Invoice</Button>
          <Button>Send to {/* Might change later */} Bank</Button>
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
}: { children: string } & VariantProps<typeof totalText>) => {
  return <p className={cn(totalText({ weight }))}>{children}</p>;
};

// absolute z-10 w-11/12 -translate-x-1/2 left-1/2 top-[412px]
