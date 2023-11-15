"use client";

import Dialog from "@/components/customdialog";
import { useState } from "react";
import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { useRequest } from "@/hooks";
import { RequestVerifyForm } from "@/components/features/fileUpload/requestVerifyForm";
import { useMediaQuery } from "@/hooks";
import Drawer from "react-modern-drawer";
import { Button } from "@/components/ui/button";
import Draggable from "react-draggable";
import { X } from "lucide-react";

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

  const matches = useMediaQuery("(min-width: 768px)");

  const cancelResultModal = () => {
    setOpen(false);
  };

  const doneAction = () => {
    cancelResultModal();
  };

  return (
    <>
      {matches ? (
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
      ) : (
        <>
          <Button
            variant={"link"}
            size={"link"}
            className="underline"
            onClick={() => setOpen(true)}
          >
            {"See result"}
          </Button>
          <Drawer
            direction="bottom"
            open={open}
            onClose={cancelResultModal}
            className="!h-fit rounded-t-3xl overflow-hidden"
          >
            <Draggable
              axis="y"
              handle=".handle"
              onStop={(e, data) => {
                if (data.y > 100) {
                  cancelResultModal();
                }
              }}
            >
              <>
                <div className="w-10 h-1 bg-[#959697] mx-auto mt-2 rounded-sm handle" />
                <Button
                  type="button"
                  variant={"ghost"}
                  size={"slim"}
                  onClick={cancelResultModal}
                  className="self-end block ml-auto mr-5 md:hidden"
                >
                  <X />
                </Button>
                <div className="flex flex-col gap-10 p-5">
                  {documents && (
                    <FileDisplay
                      fileName={documents[0].name}
                      type={documents[0].type}
                      link={documents[0].link}
                      date={documents[0].createdAt}
                      description={documents[0].description}
                    />
                  )}
                  <Button onClick={doneAction}>Done</Button>
                </div>
              </>
            </Draggable>
          </Drawer>
        </>
      )}
    </>
  );
};

export const VerifiedDialog = ({ requestId }: { requestId: string }) => {
  const [open, setOpen] = useState(false);

  const cancelDialog = () => {
    setOpen(false);
  };

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {matches ? (
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
      ) : (
        <>
          <Button
            variant={"link"}
            size={"link"}
            className="underline"
            onClick={() => setOpen(true)}
          >
            {"Upload"}
          </Button>
          <Drawer
            direction="bottom"
            open={open}
            onClose={cancelDialog}
            className="!h-fit rounded-t-3xl overflow-hidden"
          >
            <Draggable
              axis="y"
              handle=".handle"
              onStop={(e, data) => {
                if (data.y > 100) {
                  cancelDialog();
                }
              }}
            >
              <>
                <div className="w-10 h-1 bg-[#959697] mx-auto mt-2 rounded-sm handle" />
                <Button
                  type="button"
                  variant={"ghost"}
                  size={"slim"}
                  onClick={cancelDialog}
                  className="self-end block ml-auto mr-5 md:hidden"
                >
                  <X />
                </Button>
                <div className="p-5">
                  <RequestVerifyForm requestId={requestId} closeModal={cancelDialog} />
                </div>
              </>
            </Draggable>
          </Drawer>
        </>
      )}
    </>
  );
};
