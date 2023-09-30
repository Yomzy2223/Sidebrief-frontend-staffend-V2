"use client";

import MenuIcon from "@/assets/icons/menuIcon";
import { Button } from "@/components/ui/button";
import { sidebarItems } from "./index";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoutIcon from "@/assets/icons/logoutIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { X } from "lucide-react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

export const SidebarMobile = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/auth/login");
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant={"ghost"} size={"slim"} onClick={() => setOpen((prev) => !prev)}>
        {!open ? (
          <MenuIcon
            className={{
              svg: "w-6 h-6",
              path: "fill-secondary",
            }}
          />
        ) : (
          <X className="w-6 h-6 stroke-secondary" />
        )}
      </Button>
      <Drawer
        open={open}
        direction="right"
        onClose={() => setOpen(false)}
        className="p-5 pt-3 max-w-[80%] m-auto"
      >
        <div className="flex flex-col h-full">
          <Button
            variant={"ghost"}
            size={"slim"}
            className="ml-auto"
            onClick={() => setOpen((prev) => !prev)}
          >
            {!open ? (
              <MenuIcon
                className={{
                  svg: "w-6 h-6",
                  path: "fill-secondary",
                }}
              />
            ) : (
              <X className="w-6 h-6 stroke-secondary" />
            )}
          </Button>
          <div
            className={cn("flex flex-col flex-1 justify-between w-full h-full text-sm bg-white")}
          >
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
        </div>
      </Drawer>
    </div>
  );
};
