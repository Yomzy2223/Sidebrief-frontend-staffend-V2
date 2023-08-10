"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icons/back.svg";
import Image from "next/image";

export const Back = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="flex gap-4 h-max w-max py-2 mb-4 hover:bg-white"
      onClick={() => {
        router.back();
      }}
    >
      <Image src={backIcon} alt="" width={20} height={20} />
      Back
    </Button>
  );
};
