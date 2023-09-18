"use client";
import { Search } from "@/components/features/Search";
import { ActiveNav } from "@/components/features/activeNav";
import { useRequest } from "@/hooks";
import React from "react";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";

const Requestlayout = ({ children }: { children: React.ReactNode }) => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const unVerified = allRequestData?.filter((el) => el?.status === "Unverified");
  const verified = allRequestData?.filter((el) => el?.status === "Verified");
  const inProgress = allRequestData?.filter((el) => el?.status === "In progress");
  const completed = allRequestData?.filter((el) => el?.status === "Completed");

  return (
    <div>
      <div className="flex items-center justify-between py-4 pl-10 pr-6">
        <div className="flex items-center gap-2">
          <ActiveNav2 nav={allStatus} defaultURL="/diligence/requests" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Requestlayout;

export const allStatus = [
  { text: "All-Searches", path: "/diligence/requests" },
  { text: "Unverified", path: "/diligence/requests/unverified" },
  { text: "Verified", path: "/diligence/requests/verified" },
  { text: "Completed", path: "/diligence/requests/completed" },
];
