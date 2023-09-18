import React from "react";
import searchIcon from "@/assets/svg/searchIcon.svg";

import Image from "next/image";
import { Input } from "@/components/ui/input";

interface SearchProps {
  placeholderValue?: string;
  collectSearch?: (value: string) => void;
}

export const Search = ({
  placeholderValue = "Search for anything",
  collectSearch,
}: SearchProps) => {
  return (
    <div className="w-full h-14 rounded-lg border border-[#EDF1F6] flex justify-between items-center px-4 py-4">
      <Input
        onChange={(event) => collectSearch && collectSearch(event.target.value)}
        placeholder={placeholderValue}
        className="w-[90%]focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0  text-sm not-italic font-normal leading-5 text-gray-700  border-none outline outline-none bg-transparent placeholder-shown:text-red"
      />

      <div className="w-10 h-10 rounded-[50%] cursor-pointer bg-[#00A2D4] flex justify-center item-center">
        <Image src={searchIcon} alt="Search" width={20} height={20} />
      </div>
    </div>
  );
};
