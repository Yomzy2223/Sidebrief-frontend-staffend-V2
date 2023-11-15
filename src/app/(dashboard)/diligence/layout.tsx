"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ActiveNav } from "@/components/features/activeNav";
import { Search } from "@/components/features/Search";
import CMSelect from "@/components/cmSelect";
import BankHeader from "./header";
import { useEnterprise, useRequest } from "@/hooks";
import { useRouter } from "next/navigation";
import { DiligenceProvider, useDiligence } from "@/context/diligence";
import { useMediaQuery } from "@/hooks";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";

const DiligenceLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const path = pathname.includes("all-request");
  const options = ["All", "Bank"];
  const [value, setValue] = useState("");

  const matches = useMediaQuery("(min-width: 768px)");

  const { useViewAllEnterpriseQuery } = useEnterprise();

  const allEnterprise = useViewAllEnterpriseQuery();

  const { useViewAllRequestQuery } = useRequest();
  const allRequest = useViewAllRequestQuery();

  const router = useRouter();
  //   const handleSelect =(e: React.ChangeEvent<HTMLSelectElement>) => {

  // 	setValue(e.target.value);
  // 	console.log(value);
  //     //router.push(selectedValue );
  //   };

  return (
    <DiligenceProvider>
      <div>
        <BankHeader />
        <div className="flex w-full pl-5 md:pl-10 pr-6 h-16 border-b-0 md:border-b border-[#EDF1F6] items-center justify-between">
          {matches ? (
            <div className="flex items-center gap-8">
              <ActiveNav
                title="Enterprises"
                path="/diligence/enterprises"
                length={allEnterprise.isSuccess ? allEnterprise.data.data.data.length : 0}
              />
              <ActiveNav
                title="Requests"
                path="/diligence/requests"
                length={allRequest.isSuccess ? allRequest.data.data.data.length : 0}
              />
            </div>
          ) : (
            <ActiveNav2
              nav={[
                {
                  path: "/diligence/enterprises",
                  text: "Enterprises",
                  number: allEnterprise.isSuccess ? allEnterprise.data.data.data.length : 0,
                },
                {
                  path: "/diligence/requests",
                  text: "Requests",
                  number: allRequest.isSuccess ? allRequest.data.data.data.length : 0,
                },
              ]}
              defaultURL="/diligence/enterprises"
            />
          )}
          {!path && matches ? (
            <Searcher />
          ) : (
            <p className="flex"></p>
            // <div className="flex items-center gap-2 w-fit">
            // 	<p className="text-sm w-full font-normal text-[#4E5152] leading-[21px]">
            // 		{" "}
            // 		Filter by:
            // 	</p>
            // 	<CMSelect defaultValue="All" options={options} handleSelect={(e)=>handleSelect(e)}/>
            // </div>
          )}
        </div>
        {children}
      </div>
    </DiligenceProvider>
  );
};

export default DiligenceLayout;

const Searcher = () => {
  const { setSearchValue } = useDiligence();

  return (
    <div className="max-w-[373px] w-full">
      <Search collectSearch={setSearchValue} />
    </div>
  );
};
