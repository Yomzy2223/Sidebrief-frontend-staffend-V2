"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";

import { useEnterprise, useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";

const AllRequest = () => {
  const { viewAllRequestQuery } = useRequest();
  const allRequest = viewAllRequestQuery();

  const headers = ["S/N", "Business name", "Business reg number", "Requested by", "Date", "Time"];

  const allRequestData = allRequest?.data?.data?.data;
  const bodyData = allRequestData?.map((request, index) => [
    numeral(index + 1).format("00"),
    request?.name,
    request?.registrationNumber,
    request?.createdBy,
    format(parseJSON(request.updatedAt), "dd/MM/yyyy"),
    getTimeInfo(request.updatedAt),
    ,
  ]);

  return (
    <div>
      {allRequest.isLoading ? (
        <div>Loading...</div>
      ) : allRequest.isSuccess ? (
        <CMTable header={headers} body={bodyData} />
      ) : (
        <div>There was an error</div>
      )}
    </div>
  );
};

export default AllRequest;
