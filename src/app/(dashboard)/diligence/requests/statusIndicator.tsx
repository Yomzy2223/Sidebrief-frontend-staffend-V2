import { cn } from "@/lib/utils";

export const Status = ({
  status,
}: {
  status: "Completed" | "Verified" | "Unverified" | "In progress";
}) => {
  return (
    <div
      className={cn("w-fit p-2 rounded", {
        "text-[#D400CC] bg-[#D400CC]/10":
          status === "Verified" || status === "Unverified" || status === "In progress",
        "text-[#00D448] bg-[#00D448]/10": status === "Completed",
      })}
    >
      {status}
    </div>
  );
};
