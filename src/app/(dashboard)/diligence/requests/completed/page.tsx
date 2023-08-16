"use client";
import CMTable from "@/components/features/cmTable";
import React, { useState } from "react";

import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";
import { Dialog } from "@/components/customdialog";
import { FileDisplay } from "@/components/customdialog/fileDisplay";

const Completed = () => {
  const [showResult, setShowResult] = useState(false);
  const [requestId, setRequestId] = useState("");

  const { viewAllRequestQuery, lazyGetRequestDocumentQuery } = useRequest();
  const allRequest = viewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;
  const requestDocument = lazyGetRequestDocumentQuery(requestId);
  const documents = requestDocument.data?.data.data;

  const completed = allRequestData?.filter((el) => el?.status === "Completed");
  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Date",
    "Time",
    "Action",
  ];

  const bodyData = completed?.map((request, index) => [
    numeral(index + 1).format("00"),
    request?.name,
    request?.registrationNumber,
    request?.createdBy,
    format(parseJSON(request.updatedAt), "dd/MM/yyyy"),
    getTimeInfo(request.updatedAt),
    "See result",
  ]);

  const handleCellClick: (
    cellData?:
      | string
      | number
      | {
          imageLink: string;
          bankName: string;
        }
      | undefined,
    rowIndex?: number | undefined,
    columnIndex?: number | undefined
  ) => void = (cellData, rowIndex, columnIndex) => {
    if (cellData === "See result") {
      setShowResult(true);
      if (completed) {
        const id = completed[rowIndex as number].id;
        setRequestId(id);
      }
    }
  };

  const cancelResultModal = () => {
    setShowResult(false);
  };

  const doneAction = () => {
    cancelResultModal();
  };

  return (
    <>
      {allRequest.isLoading ? (
        <div>Loading...</div>
      ) : (
        <CMTable
          header={headers}
          body={bodyData}
          lastColumnCursor
          link
          onCellClick={handleCellClick}
        />
      )}
      <Dialog
        dialogType="state"
        actionText="Done"
        open={showResult}
        cancel={cancelResultModal}
        footer={true}
        title={
          requestDocument.isLoading && !requestDocument.isSuccess
            ? "Loading..."
            : "Verification Successful"
        }
        action={doneAction}
      >
        {documents && (
          <FileDisplay
            fileName={documents[0].name}
            type={documents[0].type}
            link={documents[0].link}
            date={documents[0].createdAt}
            description={documents[0].description}
          />
        )}
      </Dialog>
    </>
  );
};

export default Completed;
