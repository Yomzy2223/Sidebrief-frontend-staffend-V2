import React from "react";
import EmptyListImage from "@/assets/icons/EmptyListImage.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Diligence = () => {
  const empty = false;

  return (
    <div className="">
      <div className="flex justify-between items-center px-10 py-4 text-2xl font-medium border border-b-border">
        <p>Due Diligence</p>
        <div className="space-x-6">
          <Button variant="outline">Download Invoice</Button>
          <Button>Send to GTBank</Button>
        </div>
      </div>
      {empty ? (
        <div className="flex justify-center w-full h-full">
          <div className="flex flex-col items-center bg-muted p-9 h-max mt-[100px]">
            <Image src={EmptyListImage} alt="" className="mb-8" />
            <h3 className="mb-5 text-2xl font-normal ">No list</h3>
            <p>Onboarded banks will appear here when you onboard one</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Diligence;
