import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ActiveNav2Skeleton = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="w-14 h-8" />
      <Skeleton className="w-14 h-8" />
      <Skeleton className="w-14 h-8" />
    </div>
  );
};

export default ActiveNav2Skeleton;
