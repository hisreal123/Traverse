import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import ThemeProvider from "@/context/ThemeCtx";
import { cn } from "@/utils";
import StateCtxProvider from "@/context/StateCtx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // icons: "/assets/Logo_primary.svg",
  title: "Traverse",
  description: "Traverse team MVP application for Sync Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider>
        <StateCtxProvider>
          <body
            className={cn(
              "w-full max-w-[1440px] mx-auto dark:bg-gray-900 bg-[#fafafa] transition-colors duration-500 relative min-h-screen overflow-hidden"
            )}
          >
            <section className="w-full max-w-[1360px] mx-auto overflow-y-scroll h-screen ">
              {children}
            </section>
          </body>
        </StateCtxProvider>
      </ThemeProvider>
    </html>
  );
}
