import Sidebar from "@/components/features/sidebar";
import MainHeader from "@/components/features/headers/mainHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen ">
      <MainHeader />
      <div className="flex flex-1 ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full max-h-[calc(100vh-61px)] overflow-auto">{children}</div>
      </div>
    </div>
  );
}
