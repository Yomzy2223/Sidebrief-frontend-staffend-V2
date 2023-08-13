"use client";

import CMTable from "@/components/features/cmTable";
import React from "react";
import { dataBody, headers } from "./constant";
import { useEnterprise } from "@/hooks/useEnterprise";

const Banks = () => {
	const { viewAllEnterpriseQuery } = useEnterprise();

	const allEnterprse = viewAllEnterpriseQuery();
	console.log(allEnterprse.data);

	return (
		<div>
			<CMTable
				header={headers}
				body={dataBody}
				lastColumnCursor
				link={true}
			/>
		</div>
	);
};

export default Banks;
