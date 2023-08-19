"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";
import { Status } from "./statusIndicator";
import { ActionButton } from "./action";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { compareDesc, parseJSON, compareAsc, format } from "date-fns";

const AllRequest = () => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();

  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Status",
    "Action",
  ];

  const allRequestData = allRequest?.data?.data?.data || [];
  const bodyData = allRequestData
    .sort((a, b) => compareDesc(parseJSON(a.createdAt), parseJSON(b.createdAt)))
    .map((request, index) => [
      numeral(index + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy,
      <Status key={request.id} status={request.status} />,
      <ActionButton key={request.id} id={request.id} status={request.status} />,
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
