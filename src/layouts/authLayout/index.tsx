"use client";

import React, { ReactNode, useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slidesInfo } from "./constants";
import Image from "next/image";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/bundle";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 3000,
      },
      scrollbar: false,
      loop: true,
      grapCursor: true,
      mousewheel: {
        invert: true,
      },
      observer: true,
      speed: 500,
    });
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex-1 m-auto">
        <div className=" w-4/5 m-auto">{children}</div>
      </div>

      <div className="flex flex-col justify-between max-w-[40%] px-10 py-20 bg-primary ">
        <div className="space-y-6">
          <p className="text-white text-4xl font-semibold ">
            Quickly launch your business without stress
          </p>
          <p className="text-white text-xl font-normal">
            Launch your business without stress. Launch your business without
            stress.
          </p>
        </div>
        <div className="relative">
          <div className="swiper max-w-full bg-[#ffffff1e] rounded-2xl mb-4">
            <div className="swiper-wrapper">
              {slidesInfo.map((el, i) => (
                <div key={i} className="swiper-slide p-6 space-y-6">
                  <p className="text-white text-2xl font-semibold ">
                    {el.title}
                  </p>
                  <p className="text-white font-light ">{el.description}</p>
                  <div className="flex gap-2 pt-4 ">
                    <Image src={el.icon} alt="" className="w-16 h-16" />
                    <div className="flex flex-col justify-between py-2">
                      <p className="text-white font-semibold ">{el.name}</p>
                      <p className="text-white font-light text-sm ">
                        {el.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-pagination !relative "></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
