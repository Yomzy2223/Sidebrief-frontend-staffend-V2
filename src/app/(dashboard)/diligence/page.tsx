import React from "react";
import EmptyListImage from "@/assets/icons/EmptyListImage.png";
import Image from "next/image";

const Diligence = () => {
  const empty = true;

  return (
    <div className=" h-full">
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
