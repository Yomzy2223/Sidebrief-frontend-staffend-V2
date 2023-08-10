import CMTable from "@/components/features/cmTable";
import React from "react";
import { dataBody, headers } from "./constant";

const Verified = () => {
  return <CMTable header={headers} body={dataBody} lastColumnCursor />;
};

export default Verified;
