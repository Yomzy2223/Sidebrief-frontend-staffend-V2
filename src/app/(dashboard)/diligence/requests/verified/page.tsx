"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON, compareDesc } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";
import { VerifiedDialog } from "../action";
import { useDiligence } from "@/context/diligence";

const Verified = () => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const { searchValue } = useDiligence();

  const verified = allRequestData?.filter((el) => el?.status === "Verified") || [];
  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Date",
    "Time",
    "Action",
  ];

  const normalize = (text: string) => text?.trim().toLowerCase();

  const filteredRequest = verified?.filter(
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
      format(parseJSON(request.updatedAt), "dd/MM/yyyy"),
      getTimeInfo(request.updatedAt),
      <VerifiedDialog key={request.id} requestId={request.id} />,
    ]);

  return (
    <>
      {allRequest.isLoading ? (
        <div>Loading...</div>
      ) : (
        <CMTable header={headers} body={bodyData} lastColumnCursor />
      )}
    </>
  );
};

export default Verified;
