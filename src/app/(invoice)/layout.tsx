"use client";

import Sidebar from "@/components/features/sidebar";
import MainHeader from "@/components/features/headers/mainHeader";
import { useMediaQuery } from "@/hooks";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col h-screen ">
      {matches && <MainHeader />}
      <div className="flex flex-1 ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full max-h-[calc(100vh-61px)] overflow-auto">{children}</div>
      </div>
    </div>
  );
}
