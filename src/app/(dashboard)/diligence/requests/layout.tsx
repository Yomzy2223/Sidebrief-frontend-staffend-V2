"use client";
import { Search } from "@/components/features/Search";
import { ActiveNav } from "@/components/features/activeNav";
import { useRequest } from "@/hooks";
import React from "react";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";
import { useMediaQuery } from "@/hooks";

const Requestlayout = ({ children }: { children: React.ReactNode }) => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const unVerified = allRequestData?.filter((el) => el?.status === "Unverified");
  const verified = allRequestData?.filter((el) => el?.status === "Verified");
  const inProgress = allRequestData?.filter((el) => el?.status === "In progress");
  const completed = allRequestData?.filter((el) => el?.status === "Completed");

  const allStatus: {
    text: string;
    path: string;
    number?: number;
    statusColor?: "green" | "purple" | "yellow";
  }[] = [
    {
      text: "All",
      path: "/diligence/requests",
      number: allRequestData?.length,
      // statusColor: "",
    },
    {
      text: "Unverified",
      path: "/diligence/requests/unverified",
      number: unVerified?.length,
      statusColor: "purple",
    },
    {
      text: "Verified",
      path: "/diligence/requests/verified",
      number: verified?.length,
      statusColor: "yellow",
    },
    {
      text: "Completed",
      path: "/diligence/requests/completed",
      number: completed?.length,
      statusColor: "green",
    },
  ];

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 md:pl-10 md:pr-6">
        {matches ? (
          <div className="flex items-center gap-2">
            <ActiveNav2 nav={allStatus} defaultURL="/diligence/requests" />
          </div>
        ) : (
          <div className="flex overflow-x-auto border-b">
            {allStatus.map((status, i) => (
              <ActiveNav key={i} title={status.text} path={status.path} length={status.number} />
            ))}
          </div>
        )}
      </div>
      <div className="mx-5">{children}</div>
    </div>
  );
};

export default Requestlayout;

// export const allStatus = [
//   { text: "All-Searches", path: "/diligence/requests" },
//   { text: "Unverified", path: "/diligence/requests/unverified" },
//   { text: "Verified", path: "/diligence/requests/verified" },
//   { text: "Completed", path: "/diligence/requests/completed" },
// ];
