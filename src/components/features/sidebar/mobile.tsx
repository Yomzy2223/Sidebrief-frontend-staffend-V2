"use client";

import { useRef } from "react";
import MenuIcon from "@/assets/icons/menuIcon";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sidebarItems } from "./index";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoutIcon from "@/assets/icons/logoutIcon";
import { useOnClickOutside } from "@/hooks";

export const SidebarMobile = () => {
  const [openHam, setOpenHam] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/auth/login");
  };

  const closeSidebar = () => {
    setOpenHam(false);
  };

  // useOnClickOutside(ref, closeSidebar);

  return (
    <>
      <Button variant={"ghost"} onClick={() => setOpenHam((prev) => !prev)} className="z-10">
        <MenuIcon
          className={{
            svg: "w-6 h-6",
            path: "fill-secondary",
          }}
        />
      </Button>
      {openHam && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-transparent"
          onClick={closeSidebar}
        />
      )}
      <div
        ref={ref}
        className={cn(
          "fixed right-0 flex flex-col space-y-2 flex-1 w-full text-sm bg-white top-20 translate-x-full transition-transform duration-200",
          {
            "translate-x-0": openHam,
          }
        )}
      >
        <div className="flex flex-col gap-2 overflow-x-hidden ">
          {sidebarItems.map((item, i) => {
            const active = i === 0 ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={i}
                onClick={closeSidebar}
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

                  <span
                    className={cn(
                      "text-inherit group-hover:text-secondary",
                      active && "text-secondary"
                    )}
                  >
                    {item.text}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <Button
          variant="ghost2"
          onClick={() => {
            closeSidebar();
            handleLogout();
          }}
          className="justify-start w-full"
        >
          <div className="flex items-center gap-2 ">
            <LogoutIcon />
            <p className="text-destructive">Logout</p>
          </div>
        </Button>
      </div>
    </>
  );
};
