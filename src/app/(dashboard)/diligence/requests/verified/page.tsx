"use client";
import CMTable from "@/components/features/cmTable";
import React, { useState } from "react";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";
import { Dialog } from "@/components/customdialog";
import { RequestVerifyForm } from "@/components/features/fileUpload/requestVerifyForm";

const Verified = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [requestId, setRequestId] = useState("");

  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data;

  const verified = allRequestData?.filter((el) => el?.status === "Verified");
  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Date",
    "Time",
    "Action",
  ];

  const bodyData = verified?.map((request, index) => [
    numeral(index + 1).format("00"),
    request?.name,
    request?.registrationNumber,
    request?.createdBy,
    format(parseJSON(request.updatedAt), "dd/MM/yyyy"),
    getTimeInfo(request.updatedAt),
    "Upload",
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
    if (cellData === "Upload") {
      setShowUploadModal(true);
      if (verified) {
        const id = verified[rowIndex as number].id;
        setRequestId(id);
      }
    }
  };

  const cancelDialog = () => {
    setShowUploadModal(false);
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
        open={showUploadModal}
        cancel={cancelDialog}
        footer={false}
        title={"Upload document"}
        showCloseButton={false}
      >
        <RequestVerifyForm requestId={requestId} closeModal={cancelDialog} />
      </Dialog>
    </>
  );
};

export default Verified;
