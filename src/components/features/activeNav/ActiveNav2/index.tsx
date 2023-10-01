"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface navType {
  text: string;
  path: string;
  number?: number;
  statusColor?: "green" | "purple" | "yellow";
}

const ActiveNav2 = ({ nav, defaultURL }: { nav: navType[]; defaultURL?: string }) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 border border-border w-max h-max px-[1px] rounded-lg bg-muted">
      {nav.map((el, i) => {
        const isActive = pathname === el.path || (i === 0 && pathname === defaultURL);

        return (
          <Link key={i} href={el.path}>
            <span
              className={cn(
                "bg-transparent text-base p-3 rounded-lg flex items-center border border-border gap-2.5",
                isActive && "bg-white font-semibold"
              )}
            >
              {el.text}
              {el.number !== undefined && (
                <span
                  className={cn(
                    "px-3 py-1 text-xs leading-4 rounded-lg bg-secondary/10 text-secondary",
                    {
                      "bg-[#00D448]/10 text-[#00D448]": el.statusColor === "green",
                      "bg-[#E5A100]/10 text-[#E5A100]": el.statusColor === "yellow",
                      "bg-[#D400CC]/10 text-[#D400CC]": el.statusColor === "purple",
                    }
                  )}
                >
                  {el.number}
                </span>
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ActiveNav2;
