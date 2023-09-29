"use client";

import React, { ChangeEvent, useState, useRef } from "react";
import { useEnterprise } from "@/hooks/useEnterprise";
import { AddOrEditBank } from "@/components/features/AddOrEditBank";
import { useMediaQuery, useOnClickOutside } from "@/hooks";
import { Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDiligence } from "@/context/diligence";
import { Input } from "@/components/ui/input";

const BankHeader = () => {
  const { useGetNigerianBanksQuery } = useEnterprise();
  const nigerianBanks = useGetNigerianBanksQuery();
  const banks = nigerianBanks.data?.data.data;
  const [showSearch, setShowSearch] = useState(false);

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex w-full items-center py-6 md:py-11 pl-5 md:pl-10 pr-5 md:pr-6 border-b-0 md:border-b border-[#EDF1F6] justify-between relative">
      <p className="text-xl md:text-2xl not-italic font-semibold leading-[130%] text-gray-900">
        Diligence Searches
      </p>
      <div className="flex items-center gap-5">
        {!matches && (
          <>
            <Button variant={"ghost"} size={"slim"} onClick={() => setShowSearch(true)}>
              <Search />
            </Button>
            {showSearch && <SearcherMobile unset={() => setShowSearch(false)} />}
          </>
        )}
        <AddOrEditBank
          triggerText={matches ? "Add New Enterprise" : <Plus className="stroke-primary" />}
          variant="add"
          banks={banks || []}
        />
      </div>
    </div>
  );
};

export default BankHeader;

const SearcherMobile = ({ unset }: { unset: () => void }) => {
  const { setSearchValue } = useDiligence();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, unset);

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full">
      <div
        ref={ref}
        className="bg-white w-full h-14 rounded-lg border border-[#EDF1F6] flex justify-between items-center px-4 py-4"
      >
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
          placeholder={"Search something..."}
          className="w-[90%] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0  text-sm not-italic font-normal leading-5 text-gray-700  border-none outline outline-none bg-transparent placeholder-shown:text-red"
        />

        <Button variant={"ghost"} size={"slim"} onClick={unset}>
          <X />
        </Button>
      </div>
    </div>
  );
};
