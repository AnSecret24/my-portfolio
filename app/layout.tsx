import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Đảm bảo bạn đã tạo file này ở Bước 4


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "An | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

