import React from "react";
import { Button } from "@/components/ui/button";
import { useEnterprise } from "@/hooks/useEnterprise";
import { AddOrEditBank } from "@/components/features/AddOrEditBank";

const BankHeader = () => {
  const { useGetNigerianBanksQuery } = useEnterprise();
  const nigerianBanks = useGetNigerianBanksQuery();
  const banks = nigerianBanks.data?.data.data;

  return (
    <div className="flex w-full items-center py-11 pl-10 pr-6 border-b border-[#EDF1F6] justify-between">
      <p className="text-2xl not-italic font-semibold leading-[130%] text-gray-900">
        Diligence Registration(s)
      </p>
      <div className="">
        <AddOrEditBank triggerText="Add New Enterprise" variant="add" banks={banks || []} />
      </div>
    </div>
  );
};

export default BankHeader;
