"use client";

import React, { useState } from "react";
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

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.clear();
    router.push("auth/login");
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col flex-1 gap-12 border-r border-border w-[237px] h-full py-4 px-6 ",
        !open && "w-max"
      )}
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <Button
        variant="ghost"
        className="justify-start max-w-max mx-3 px-0 py-0 min-w-max h-max "
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </Button>
      <div className="flex flex-col flex-1 justify-between text-sm ">
        <div className="flex flex-col gap-2 overflow-x-hidden ">
          {sidebarItems.map((item, i) => {
            const active =
              i === 0 ? pathname === "/" : pathname?.startsWith(item.href);
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
                      path: cn(
                        "group-hover:fill-secondary",
                        active && "fill-secondary"
                      ),
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
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start"
        >
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
const sidebarItems = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/diligence", text: "Diligence", icon: DetailsIcon },
  { href: "/settings", text: "Settings", icon: SettingsIcon },
];

//
const variants = {
  open: { width: "237px" },
  closed: { width: "101px" },
};
