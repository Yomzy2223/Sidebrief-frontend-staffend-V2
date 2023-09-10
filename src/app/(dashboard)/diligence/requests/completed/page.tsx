"use client";
import CMTable from "@/components/features/cmTable";
import React from "react";

import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON, compareDesc } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";
import { CompletedDialog } from "../action";
import { useDiligence } from "@/context/diligence";

const Completed = () => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const { searchValue } = useDiligence();

  const completed = allRequestData?.filter((el) => el?.status === "Completed") || [];
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

  const filteredRequest = completed?.filter(
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
      <CompletedDialog key={request.id} requestId={request.id} />,
    ]);

  return (
    <>
      <CMTable header={headers} body={bodyData} lastColumnCursor />
    </>
  );
};

export default Completed;
