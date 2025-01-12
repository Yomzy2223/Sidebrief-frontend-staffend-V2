"use client";

import { useState, useEffect } from "react";
import { BankSettingInfo } from "@/components/features/BankSettingInfo";
import CMTable from "@/components/features/cmTable";
import { useEnterprise } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { IDiligenceManager, IRequest } from "@/types/returns";
import { useCheckIsImage } from "@/hooks";
import EmptyImage from "@/assets/images/emptyImage.png";
import { Loader } from "@/components/features/cmTable/loader";

export default function BankDetail({ params }: { params: { id: string } }) {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = useViewEnterpriseByIdQuery(params.id);
  const selectedEnterprise = enterpriseById.data?.data.data;
  const enterpriseLoading = enterpriseById?.isLoading;

  const getRequestsAssociatedWithbranch: (a: IDiligenceManager, b: IRequest[]) => number = (
    branch,
    requests
  ) => {
    const staffs = branch.diligenceStaff.map((staff) => staff.email);
    const branchEmails = new Set([branch.managerEmail, ...staffs]);
    const totalRequests = requests.reduce(
      (count, request) => (branchEmails.has(request.createdBy) ? count + 1 : count),
      0
    );
    return totalRequests;
  };

  const imageCheck = useCheckIsImage(selectedEnterprise?.logo);

  const imageChecked = imageCheck.isSuccess;
  const isImage = imageCheck.data;

  return (
    <>
      <div className="px-5 py-4 space-y-8 md:pl-10 md:pr-6 md:pt-4 md:pb-6">
        <BankSettingInfo
          name={selectedEnterprise?.name || "--"}
          address={selectedEnterprise?.address || "--"}
          adminEmail={selectedEnterprise?.adminEmail || "--"}
          image={isImage ? selectedEnterprise?.logo! : EmptyImage}
          id={selectedEnterprise?.id as string}
          brandColor={selectedEnterprise?.color || ""}
          loading={enterpriseById.isLoading || imageCheck.isLoading}
        />
        <div className="space-y-4">
          <h6 className="text-xl font-semibold leading-6 text-foreground">Onboarded branches</h6>
          {enterpriseById?.isLoading ? (
            <Loader />
          ) : (
            <CMTable
              header={["S/N", "Branch name", "Requests", "Branch Admin Email", "Date"]}
              body={
                selectedEnterprise?.diligenceManager.map((el, index) => [
                  numeral(index + 1).format("00"),
                  el.name,
                  getRequestsAssociatedWithbranch(el, selectedEnterprise.diligenceRequest),
                  el.managerEmail,
                  format(parseJSON(el.createdAt), "dd/MM/yyyy"),
                ]) || []
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
