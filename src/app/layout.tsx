import "./globals.css";
import type { Metadata } from "next";
import { BrFirma } from "@/font";
import Providers from "@/lib/provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sidebrief staff",
  description: "Sidebrief staffs controls everything from here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={BrFirma.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
