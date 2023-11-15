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
import { useEnterprise } from "@/hooks/useEnterprise";
import { AddOrEditBank } from "@/components/features/AddOrEditBank";

const MainHeader = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const { useGetNigerianBanksQuery } = useEnterprise();
  const nigerianBanks = useGetNigerianBanksQuery();
  const banks = nigerianBanks.data?.data.data;

  return (
    <div className="sticky top-0 z-50 bg-white border-b-0 md:border-b">
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
              {/* <NotificationCard /> */}
              <AddOrEditBank
                triggerText={
                  <p className="text-sm font-semibold text-primary">Add new enterprise</p>
                }
                variant="add"
                banks={banks || []}
              />
              <SidebarMobile />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
