import { InvoiceHeader } from "@/components/features/headers/invoiceHeader";
import { Back } from "./back";
import { Button } from "@/components/ui/button";
import { DiligenceTable } from "@/components/features/DiligenceTable";
import { dataBody, headers } from "./constants";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export default function InvoicePage() {
	return (
		<div className="pt-4 pl-10 pr-6">
			<div className="flex flex-col items-start gap-6 mb-6">
				<Back />
				<div className="flex items-center justify-between w-full">
					<h3 className="text-2xl font-semibold leading-normal">
						Diligence Registrations
					</h3>
					<div className="flex gap-6">
						<Button variant={"outline"}>Download Invoice</Button>
						<Button>Send to {/* Might change later */} Bank</Button>
					</div>
				</div>
			</div>
			<div className="relative">
				<InvoiceHeader />
				<div className="w-11/12 mx-auto -translate-y-20">
					<DiligenceTable header={headers} body={dataBody} />
				</div>
			</div>
			<div className="bg-primary py-2.5">
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
