'use client'
import CMTable from "@/components/features/cmTable";
import React from "react";
import { dataBody, headers } from "./constant";
import { useRequest } from "@/hooks";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { getTimeInfo } from "@/lib/globalFunctions";


const Verified = () => {

  const { viewAllRequestQuery } = useRequest();
  const allRequest=viewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data

  const verified = allRequestData?. filter (el=>el?.status==='Verified')
  const headers = [
    'S/N',
   'Business name',
    'Business reg number',
    'Requested by',
    'Date',
    'Time',
  
  ]
  
   
    const bodyData = verified?.map((request, index)=> [
      numeral(index + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy, 
      format(
        parseJSON(request.updatedAt),
        "dd/MM/yyyy"
      ),
      getTimeInfo(request.updatedAt),
     
    
    ])
  
  return <CMTable header={headers} body={bodyData} lastColumnCursor />;
};

export default Verified;
