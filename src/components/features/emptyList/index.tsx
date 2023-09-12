import Image from "next/image";
import { EmptyListImage } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface EmptyList {
  description?: string;
  small?: boolean;
}

export const EmptyList = ({ description, small }: EmptyList) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-[#F5F5F5]/50 max-w-[534px] px-20 py-[38px] flex flex-col items-center gap-8",
        {
          "max-w-[327px] px-12 py-6 gap-4": small,
        }
      )}
    >
      <Image
        src={EmptyListImage}
        alt=""
        className={cn("object-contain", {
          "w-[124px] h-[124px]": small,
        })}
      />
      <div
        className={cn("flex flex-col gap-5 text-center", {
          "gap-3.5": small,
        })}
      >
        <h6
          className={cn("text-2xl font-semibold leading-8 text-foreground", {
            "text-sm leading-4": small,
          })}
        >
          No list
        </h6>
        <p
          className={cn("text-lg leading-6", {
            "text-xs leading-3": small,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
