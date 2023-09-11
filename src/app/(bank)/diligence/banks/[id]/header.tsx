"use client";

import { Back } from "./back";
import { useEnterprise, useCheckIsImage } from "@/hooks";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import EmptyImage from "@/assets/images/emptyImage.png";
import { Skeleton } from "@/components/ui/skeleton";

export const BankDetailHeader = ({ id }: { id: string }) => {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(id);
  const selectedEnterprise = enterpriseById.data?.data.data;

  const imageCheck = useCheckIsImage(selectedEnterprise?.logo);
  const isImage: boolean = imageCheck.data;

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col pt-4 pb-6 pl-10 pr-6 space-y-4 bg-white border-b border-border ">
        <Back />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="relative w-[71px] h-[71px] rounded-sm overflow-hidden">
              {imageCheck.isLoading || enterpriseById.isLoading ? (
                <Skeleton className="w-full h-full" />
              ) : (
                <Image
                  src={isImage ? selectedEnterprise?.logo! : EmptyImage}
                  alt={`enterprise-image`}
                  fill
                />
              )}
            </div>
            <h3 className="text-2xl font-semibold leading-normal">
              {enterpriseById.isLoading ? (
                <Skeleton className="h-[17px] w-[244px]" />
              ) : (
                selectedEnterprise?.name
              )}
            </h3>
          </div>
          <div className="flex gap-6">
            <Link href={`/diligence/invoice/${id}`} className={buttonVariants({ size: "lg" })}>
              See invoice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
