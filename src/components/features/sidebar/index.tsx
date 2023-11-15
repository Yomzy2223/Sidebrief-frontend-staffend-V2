"use client";

import React, { useEffect, useState } from "react";
import HomeIcon from "@/assets/icons/homeIcon";
import DetailsIcon from "@/assets/icons/detailsIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MenuIcon from "@/assets/icons/menuIcon";
import { useScreenWidth } from "@/hooks";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const screenWidth = useScreenWidth();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/auth/login");
  };

  useEffect(() => {
    if (screenWidth !== null && screenWidth <= 992) {
      setOpen(false);
    }
  }, [screenWidth]);

  return (
    <motion.div
      className={cn(
        "md:flex flex-col flex-1 gap-12 border-r border-border w-[237px] h-full py-4 px-6 hidden",
        { "w-max": !open }
      )}
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <Button
        variant="ghost"
        className="justify-start px-0 py-0 mx-3 max-w-max min-w-max h-max "
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </Button>
      <div className="flex flex-col justify-between flex-1 text-sm ">
        <div className="flex flex-col gap-2 overflow-x-hidden ">
          {sidebarItems.map((item, i) => {
            const active = i === 0 ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={i}
                className={cn(
                  "group flex px-4 py-3 rounded-lg ",
                  active && "bg-background-blue text-secondary "
                )}
              >
                <div className="flex items-center gap-2 ">
                  <item.icon
                    className={{
                      path: cn("group-hover:fill-secondary", active && "fill-secondary"),
                    }}
                  />
                  {open && (
                    <span
                      className={cn(
                        "text-inherit group-hover:text-secondary",
                        active && "text-secondary"
                      )}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <Button variant="ghost2" onClick={handleLogout} className="justify-start w-full">
          <div className="flex items-center gap-2 ">
            <LogoutIcon />
            {open && <p className="text-destructive">Logout</p>}
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

//
export const sidebarItems = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/diligence/enterprises", text: "Diligence", icon: DetailsIcon },
  { href: "/settings", text: "Settings", icon: SettingsIcon },
];

//
const variants = {
  open: { width: "237px" },
  closed: { width: "101px" },
};
