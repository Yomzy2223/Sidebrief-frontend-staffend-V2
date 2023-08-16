"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Back } from "./back";
import { useEnterprise } from "@/hooks";
import Image from "next/image";
import { checkIsImage } from "@/lib/globalFunctions";

export const BankDetailHeader = ({ id }: { id: string }) => {
  const [isImage, setIsImage] = useState(false);
  const [imageChecked, setImageChecked] = useState(false);

  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(id);
  const selectedEnterprise = enterpriseById.data?.data.data;

  useEffect(() => {
    const checkIfImage = async () => {
      if (selectedEnterprise) {
        const isImage = await checkIsImage(selectedEnterprise?.logo);
        setIsImage(isImage);
        setImageChecked(true);
      }
    };

    checkIfImage();
  }, [selectedEnterprise]);

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col pt-4 pb-6 pl-10 pr-6 space-y-4 bg-white border-b border-border ">
        <Back />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="relative w-[71px] h-[71px] rounded-sm overflow-hidden">
              <Image
                src={
                  !imageChecked
                    ? ""
                    : isImage
                    ? selectedEnterprise?.logo || ""
                    : "https://pixabay.com/get/g2cea5168d86f14a8bf1098146976727014f3447d841bfe53f29569743393808e2a2121aea7c81082693d95ffa0aa160a_1280.png"
                }
                alt={`enterprise-image`}
                fill
              />
            </div>
            <h3 className="text-2xl font-semibold leading-normal">
              {selectedEnterprise?.name || "--"}
            </h3>
          </div>
          <div className="flex gap-6">
            {/* TODO: should navigate to invoice page */}
            {/* <Button>See invoice</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
