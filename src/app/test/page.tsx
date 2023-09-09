"use client";
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const HomeLoader = () => {
  return (
    <div className="flex flex-col h-screen">
       <div className="absolute top-[110px] left-[275px]">
        <div className="flex">
          <Skeleton className="relative w-[274px] bg-gray-300 h-[17px]" />
          <Skeleton className="relative ml-[415px] w-[274px] bg-gray-300 h-[17px]" />
        </div>
      </div>


      <Skeleton className="absolute top-[190px] left-[275px] bg-gray-300 w-[965px] h-[300px]"/>

    </div>

  )
}

export default HomeLoader