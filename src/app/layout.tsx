import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBarProvider } from "@/components/context/SideBarContext";
import Logo from "/public/assets/logo.png";
import { ModalProvider } from "@/components/context/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobStreet",
  description: "Created by @michaelsinanta",
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        href: "/assets/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SideBarProvider>
      <ModalProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ModalProvider>
    </SideBarProvider>
  );
}
