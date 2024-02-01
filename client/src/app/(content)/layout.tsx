import Sidebar from "@/components/navigation/sidebar";
import Navbar from "@/components/navigation/navbar";
import SkeletonNavbar from "@/components/skelton";
import { cn } from "@/utils";
import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <section className="w-full min-[900px]:pl-[80px]  absolute top-0 left-0 ">
        <Suspense fallback={<SkeletonNavbar />}>
          <header className="w-full  bg-white dark:bg-[#1B0354] min-[1440px]:border-r-soft-border min-[1440px]:border-r dark:border-success/40">
            <Navbar />
          </header>
        </Suspense>
        {/* i removed p-12 from here, and added all padding should 
          come from the child eg; check client project, te wrapper_div and it's child takes the padding 

          default padding should be p-4 except otherwise
        */}
        <div className="flex w-full flex-col h-full relative max-container md:pt-0 dark:bg-primary">
          {children}
        </div>
      </section>
    </>
  );
}
