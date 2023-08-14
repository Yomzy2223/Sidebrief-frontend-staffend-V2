import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn, convertToOneSignificantFigure } from "@/lib/utils";
import numeral from "numeral";
import { ArrowUp } from "@/assets/icons";

type BranchProps = {
  branch: true;
  branchAdminName: string;
  branchAdminEmail: string;
  brandColor: string;
};

type NoBranchProps = {
  branch: false;
  numberOfOnboardedBranches: number;
};

type BankInfoProps = {
  image: string;
  name: string;
  numberOfBusinesssVerified: number;
  totalAmountSpent: number;
  branch: boolean;
} & (BranchProps | NoBranchProps);

export const BankInfo = (props: BankInfoProps) => {
  return (
    <div className="flex gap-6">
      <div className="relative w-[200px] h-[200px] rounded-sm overflow-hidden">
        <Image src={props.image} alt={`${props.name}-image`} fill />
      </div>
      {props.branch && (
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 px-6 divide-y">
            <Detail
              detailName="Account admin name"
              detail={props.branchAdminName}
            />
            <Detail
              detailName="Account admin email"
              detail={props.branchAdminEmail}
            />
          </div>
          <Link
            href="#"
            className={cn(
              buttonVariants({
                variant: "link",
                size: "slim",
              }),
              "px-6 underline"
            )}
            style={
              props.brandColor
                ? {
                    color: props.brandColor,
                  }
                : {}
            }
          >
            Edit
          </Link>
        </div>
      )}
      <div className="flex flex-1 gap-6 p-6 border rounded">
        {!props.branch && (
          <TheBox>
            <p className="text-sm leading-4">ONBOARDED BRANCHES</p>
            <p className="text-3xl font-semibold leading-10 text-foreground">
              {props.numberOfOnboardedBranches}
            </p>
            <Link
              href={"#boarded"}
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "slim",
                }),
                "text-foreground text-sm leading-4 flex items-center h-5"
              )}
            >
              See list <ChevronRight height={18} width={18} />
            </Link>
          </TheBox>
        )}
        <RealBox
          title="BUSINESSES VERIFIED"
          number={`${numeral(
            convertToOneSignificantFigure(props.numberOfBusinesssVerified)
          ).format("0,0")}+`}
          percentThisMonth={25}
        />
        <RealBox
          title="AMOUNT SPENT"
          number={`#${numeral(
            convertToOneSignificantFigure(props.totalAmountSpent)
          ).format("0,0")}+`}
          percentThisMonth={25}
        />
      </div>
    </div>
  );
};

const TheBox = ({ children }: { children: ReactNode }) => (
  <div className="p-6 pr-10 border rounded max-w-[264px] w-full flex flex-col justify-between">
    {children}
  </div>
);

const RealBox = ({
  title,
  number,
  percentThisMonth,
}: {
  title: string;
  number: string;
  percentThisMonth: number;
}) => {
  return (
    <TheBox>
      <p className="text-sm leading-4">{title}</p>
      <p className="text-3xl font-semibold leading-10 text-foreground">
        {number}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center h-6 gap-1 px-1 rounded bg-grey">
          <p className="text-xs leading-4">{percentThisMonth}%</p> <ArrowUp />
        </div>
        <p className="text-sm leading-5">This month</p>
      </div>
    </TheBox>
  );
};

const Detail = ({
  detail,
  detailName,
}: {
  detailName: string;
  detail: string;
}) => {
  return (
    <div className="flex flex-col justify-center space-y-2 grow">
      <p className="text-base font-medium leading-snug text-foreground tracking-[0.32px]">
        {detailName}
      </p>
      <p className="text-base leading-relaxed text-muted">{detail}</p>
    </div>
  );
};
