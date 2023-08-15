"use client";
import { Search } from "@/components/features/Search";
import { ActiveNav } from "@/components/features/activeNav";
import { useRequest } from "@/hooks";
import React from "react";

const Requestlayout = ({ children }: { children: React.ReactNode }) => {
  const { viewAllRequestQuery } = useRequest();
  const allRequest = viewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const unVerified = allRequestData?.filter((el) => el?.status === "Unverified");
  const verified = allRequestData?.filter((el) => el?.status === "Verified");
  const inProgress = allRequestData?.filter((el) => el?.status === "In progress");
  const completed = allRequestData?.filter((el) => el?.status === "Completed");

  return (
    <div>
      <div className="flex items-center justify-between py-4 pl-10 pr-6">
        <div className="flex items-center gap-2">
          <ActiveNav
            title="All"
            path="/diligence/requests"
            status={true}
            length={allRequestData?.length}
          />
          <ActiveNav
            title="Unverified"
            path="/diligence/requests/unverified"
            status={true}
            length={unVerified?.length}
          />
          <ActiveNav
            title="Verified"
            path="/diligence/requests/verified"
            status={true}
            length={verified?.length}
          />
          {/* <ActiveNav
            title="In Progress"
            path="/diligence/requests/in-progress"
            status={true}
            length={inProgress?.length}
          /> */}
          <ActiveNav
            title="Completed"
            path="/diligence/requests/completed"
            status={true}
            length={completed?.length}
          />
        </div>
        {/* <div className="flex">
          <Search />
        </div> */}
      </div>
      {children}
    </div>
  );
};

export default Requestlayout;
