"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";
import { headers } from "./constant";
import { useEnterprise, useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON, compareDesc } from "date-fns";
import { useRouter } from "next/navigation";
import { useDiligence } from "@/context/diligence";

const Banks = () => {
  const router = useRouter();

  const { searchValue } = useDiligence();

  const { useViewAllEnterpriseQuery } = useEnterprise();
  const { useViewAllRequestQuery } = useRequest();

  const allEnterprise = useViewAllEnterpriseQuery();
  const allRequest = useViewAllRequestQuery();

  const enterprises = allEnterprise.data?.data.data;

  const onRowClick = (cellData: any) => {
    const name = cellData[1];
    if (enterprises) {
      const selected = enterprises.find((enterprise) => enterprise.name === name)!;
      router.push(`/diligence/banks/${selected.id}`);
    }
  };

  const normalize = (text: string) => text?.trim().toLowerCase();

  const filteredEnterprise = enterprises?.filter(
    (el: any) =>
      normalize(el?.createdBy)?.includes(searchValue) ||
      normalize(el?.name)?.includes(searchValue) ||
      el?.registrationNumber?.includes(searchValue) ||
      normalize(el?.status)?.includes(searchValue)
  );

  return (
    <div>
      {allEnterprise.isLoading || allRequest.isLoading ? (
        <div>Loading...</div>
      ) : allEnterprise.isSuccess && allRequest.isSuccess ? (
        <CMTable
          header={headers}
          // ['S/N', 'Onboarded Banks', 'Requests','Branches', 'Date', 'Registration URl',]
          body={
            filteredEnterprise
              ?.sort((a, b) => compareDesc(parseJSON(a.createdAt), parseJSON(b.createdAt)))
              .map((enterprise, index) => [
                numeral(index + 1).format("00"),
                // {
                // 	imageLink: enterprise.logo,
                // 	bankName: enterprise.name,
                // },
                enterprise.name,
                enterprise.diligenceRequest.length,
                enterprise.diligenceManager.length,
                format(parseJSON(enterprise.createdAt), "dd/MM/yyyy"),
              ]) || []
          }
          lastColumnCursor
          onRowClick={onRowClick}
        />
      ) : (
        <div>There was an error</div>
      )}
    </div>
  );
};

export default Banks;
