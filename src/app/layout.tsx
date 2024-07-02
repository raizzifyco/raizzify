import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = Manrope({ subsets: ["latin"], weight: ['400', '200', '300', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Raizzify",
  description: "A next gen application for salons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
