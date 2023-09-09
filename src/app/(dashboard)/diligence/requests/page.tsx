"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";
import { Status } from "./statusIndicator";
import { ActionButton } from "./action";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { compareDesc, parseJSON, compareAsc, format } from "date-fns";
import { useDiligence } from "@/context/diligence";
import { EmptyList } from "@/components/features/emptyList";

const AllRequest = () => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();

  const { searchValue } = useDiligence();

  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Status",
    "Action",
  ];

  const allRequestData = allRequest?.data?.data?.data || [];

  const normalize = (text: string) => text?.trim().toLowerCase();

  const filteredRequest = allRequestData?.filter(
    (el: any) =>
      normalize(el?.createdBy)?.includes(searchValue) ||
      normalize(el?.name)?.includes(searchValue) ||
      el?.registrationNumber?.includes(searchValue) ||
      normalize(el?.status)?.includes(searchValue)
  );

  const bodyData = filteredRequest
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
      {allRequest.isSuccess ? (
        <CMTable header={headers} body={bodyData} />
      ) : (
        <div className="flex justify-center mt-12">
          <EmptyList />
      </div>
      )}
    </div>
  );
};

export default AllRequest;
