"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import { useMediaQuery } from "@/hooks";

export const Back = () => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Button
      variant="ghost"
      size="icon"
      className="flex gap-4 py-2 h-max w-max hover:bg-white"
      onClick={() => {
        router.back();
      }}
    >
      <Image src={backIcon} alt="" width={20} height={20} />
      {matches && "Back"}
    </Button>
  );
};
