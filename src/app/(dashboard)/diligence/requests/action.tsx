"use client";

import Dialog from "@/components/customdialog";
import { useState } from "react";
import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { useRequest } from "@/hooks";
import { RequestVerifyForm } from "@/components/features/fileUpload/requestVerifyForm";

export const ActionButton = ({
  status,
  id,
}: {
  id: string;
  status: "Completed" | "Verified" | "Unverified" | "In progress";
}) => {
  switch (status) {
    case "Unverified":
    case "In progress":
      return <div>N/A</div>;
    case "Verified":
      return <VerifiedDialog requestId={id} />;
    case "Completed":
      return <CompletedDialog requestId={id} />;
  }
};

export const CompletedDialog = ({ requestId }: { requestId: string }) => {
  const [open, setOpen] = useState(false);

  const { useLazyGetRequestDocumentQuery } = useRequest();
  const requestDocument = useLazyGetRequestDocumentQuery(requestId);
  const documents = requestDocument.data?.data.data;

  const cancelResultModal = () => {
    setOpen(false);
  };

  const doneAction = () => {
    cancelResultModal();
  };

  return (
    <Dialog
      dialogType="normal"
      actionText="Done"
      open={open}
      setter={setOpen}
      footer={true}
      triggerText="See result"
      triggerVariant={{
        variant: "link",
        size: "link",
      }}
      triggerClassName="underline"
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
  );
};

export const VerifiedDialog = ({ requestId }: { requestId: string }) => {
  const [open, setOpen] = useState(false);

  const cancelDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog
      dialogType="normal"
      open={open}
      setter={setOpen}
      footer={false}
      title={"Upload document"}
      showCloseButton={true}
      triggerText="Upload"
      triggerVariant={{
        variant: "link",
        size: "link",
      }}
      triggerClassName="underline"
    >
      <RequestVerifyForm requestId={requestId} closeModal={cancelDialog} />
    </Dialog>
  );
};
