
import React from "react";
import { Poppins } from "next/font/google";

import "@/app/globals.css";
import { CustomLayout } from "@/components";
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={poppins.className}>
      <CustomLayout>{children}</CustomLayout>
    </body>
  </html>
);

export default RootLayout;