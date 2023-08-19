"use client";
import CMTable from "@/components/features/cmTable";
import React from "react";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON, compareDesc } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";

const Unverified = () => {
  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const unVerified = allRequestData?.filter((el) => el?.status === "Unverified") || [];
  const headers = ["S/N", "Business name", "Business reg number", "Requested by", "Date", "Time"];

  const bodyData = unVerified
    .sort((a, b) => compareDesc(parseJSON(a.createdAt), parseJSON(b.createdAt)))
    .map((request, index) => [
      numeral(index + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy,
      format(parseJSON(request.updatedAt), "dd/MM/yyyy"),
      getTimeInfo(request.updatedAt),
    ]);

  return <CMTable header={headers} body={bodyData} lastColumnCursor />;
};

export default Unverified;
