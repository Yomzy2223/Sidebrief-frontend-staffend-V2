import CMTable from "@/components/features/cmTable";
import React from "react";
import { dataBody, headers } from "./constant";

const Pending = () => {
  return (
    <div>
      <CMTable header={headers} body={dataBody} lastColumnCursor link={true} />
    </div>
  );
};

export default Pending;
