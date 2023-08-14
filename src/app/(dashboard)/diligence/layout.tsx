"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ActiveNav } from "@/components/features/activeNav";
import { Search } from "@/components/features/Search";
import CMSelect from "@/components/cmSelect";
import BankHeader from "./header";
import { useEnterprise, useRequest } from "@/hooks";
import { useRouter } from "next/navigation";


const DiligenceLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const path = pathname.includes("all-request");
	const options = ["All", "Bank"];
	const[value, setValue ]=useState('')

	const { viewAllEnterpriseQuery } = useEnterprise();

	const allEnterprise = viewAllEnterpriseQuery();

	const { viewAllRequestQuery } = useRequest();
  const allRequest=viewAllRequestQuery();

  const router = useRouter();
//   const handleSelect =(e: React.ChangeEvent<HTMLSelectElement>) => {
	
// 	setValue(e.target.value);
// 	console.log(value);
//     //router.push(selectedValue );
//   };


	return (
		<div>
			<BankHeader />
			<div className="flex w-full pl-10 pr-6 h-16 border-b border-[#EDF1F6] items-center justify-between">
				<div className="flex items-center gap-8">
					<ActiveNav
						title="Banks"
						path="/diligence/banks"
						length={
							allEnterprise.isSuccess
								? allEnterprise.data.data.data.length
								: 0
						}
					/>
					<ActiveNav
						title="All requests"
						path="/diligence/all-requests"
						length={allRequest.isSuccess
							? allRequest.data.data.data.length
							: 0}
					/>
				</div>
				{!path ? (
					<div className="max-w-[373px] w-full">
						<Search />
					</div>
				) : (
					<div className="flex items-center gap-2 w-fit">
						<p className="text-sm w-full font-normal text-[#4E5152] leading-[21px]">
							{" "}
							Filter by:
						</p>
						<CMSelect defaultValue="All" options={options} handleSelect={(e)=>handleSelect(e)}/>
					</div>
				)}
			</div>
			{children}
		</div>
	);
};

export default DiligenceLayout;
