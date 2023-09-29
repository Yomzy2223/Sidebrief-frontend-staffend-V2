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

export const SidebarMobile = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/auth/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"slim"}>
          <MenuIcon
            className={{
              svg: "w-6 h-6",
              path: "fill-secondary",
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      {/* {openHam && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-transparent"
          onClick={closeSidebar}
        />
      )} */}
      <DropdownMenuContent className="w-[250px]">
        <div className={cn("flex flex-col space-y-2 flex-1 w-full text-sm bg-white")}>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
