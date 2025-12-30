import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docs | StudyHub",
  description: "Danh sách tài liệu IT tại StudyHub, bao gồm nhiều chủ đề và cấp độ, giúp bạn dễ dàng tìm kiếm và lựa chọn tài liệu phù hợp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </div>
  );
}
