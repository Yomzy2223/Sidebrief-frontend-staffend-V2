import React from "react";
import { NotificationCard } from "@/components/features/notifications";
import Settings from "@/assets/Icons/Settings.svg";
import Logo from "@/assets/images/Logo.png";
import { UserNav } from "@/components/features/nav/user-nav";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const MainHeader = () => {
  return (
    <div className="border-b">
      <div className="flex items-center px-6 py-2">
        <div className="flex flex-col justify-center p-23">
          <Image src={Logo} alt={"sidebrief logo"} className="w-auto h-6" />
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <Link
            href="#"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Image
              src={Settings}
              alt={"Settings icon"}
              className="block w-8 h-8 "
            />
          </Link>
          <NotificationCard />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
