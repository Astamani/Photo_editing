import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navin_Ganeri Studio",
  description: "Photo Studio with all kinds of editing and video graphy specialist in wedding Photography editing ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {/* <div className="m-0 p-0 absolute  min-[300px]:visible ">
          
          <Logo />
        </div> */}
        {children}
      </body>
    </html>
  );
}
