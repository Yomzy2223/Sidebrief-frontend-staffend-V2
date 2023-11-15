"use client";

import { Back } from "./back";
import { useEnterprise, useCheckIsImage } from "@/hooks";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import EmptyImage from "@/assets/images/emptyImage.png";
import { Skeleton } from "@/components/ui/skeleton";
import { useMediaQuery } from "@/hooks";
import { NotificationCard } from "@/components/features/notifications";

export const BankDetailHeader = ({ id }: { id: string }) => {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(id);
  const selectedEnterprise = enterpriseById.data?.data.data;

  const imageCheck = useCheckIsImage(selectedEnterprise?.logo);
  const isImage: boolean = imageCheck.data;

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col pt-4 pb-4 pl-5 pr-5 space-y-4 bg-white border-b-0 md:border-b md:pb-6 md:pr-6 md:pl-10 border-border ">
        {matches ? (
          <>
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
          </>
        ) : (
          // Mobile view
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Back />
              <p className="text-xl font-semibold leading-6">
                {enterpriseById.data?.data.data.name}
              </p>
              {/* <div className="flex gap-4 ml-auto">
              <NotificationCard />
            </div> */}
            </div>
            <Button variant={"ghost"} size={"slim"} className="ml-auto" asChild>
              <Link href={`/diligence/invoice/${id}`}>
                <p className="underline text-primary">See payment invoice</p>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
