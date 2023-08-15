"use client";

import { BankSettingInfo } from "@/components/features/BankSettingInfo";
import CMTable from "@/components/features/cmTable";
import { useEnterprise } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { IDiligenceManager, IRequest } from "@/types/returns";

export default function BankDetail({ params }: { params: { id: string } }) {
  const { viewEnterpriseByIdQuery } = useEnterprise();
  const enterpriseById = viewEnterpriseByIdQuery(params.id);
  const selectedEnterprise = enterpriseById.data?.data.data;

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

  return (
    <div className="pt-4 pb-6 pl-10 pr-6 space-y-8">
      <BankSettingInfo
        name={selectedEnterprise?.name || "--"}
        address={selectedEnterprise?.address || "--"}
        adminEmail={selectedEnterprise?.adminEmail || "--"}
        image={
          "https://pixabay.com/get/g2cea5168d86f14a8bf1098146976727014f3447d841bfe53f29569743393808e2a2121aea7c81082693d95ffa0aa160a_1280.png"
        }
      />
      <div className="space-y-4">
        <h6 className="text-xl font-semibold leading-6 text-foreground">Onboarded branches</h6>
        <CMTable
          header={["S/N", "Branches", "Requests", "Branch Admin Email", "Date"]}
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
      </div>
    </div>
  );
}
