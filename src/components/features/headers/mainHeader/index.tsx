"use client";

import React from "react";
import { NotificationCard } from "@/components/features/notifications";
import Settings from "@/assets/icons/Settings.svg";
import Logo from "@/assets/images/sidebrief-logo.png";
import { UserNav } from "@/components/features/nav/user-nav";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks";
import { SidebarMobile } from "@/components/features/sidebar/mobile";

const MainHeader = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="sticky top-0 bg-white border-b-0 md:border-b">
      <div className="flex items-center px-5 pt-4 md:px-6 md:py-2">
        <div className="flex flex-col justify-center p-23">
          <Image src={Logo} alt={"sidebrief logo"} className="w-auto h-6" />
        </div>
        <div className="flex items-center ml-auto space-x-4">
          {matches ? (
            <>
              <Link
                href="#"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Image src={Settings} alt={"Settings icon"} className="block w-8 h-8 " />
              </Link>
              <NotificationCard />
              <UserNav />
            </>
          ) : (
            <>
              <NotificationCard />
              <SidebarMobile />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
