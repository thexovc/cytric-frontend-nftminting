import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import DappProvider from "@/providers/DappProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Minting",
  description: "Mint and manage your NFTs with ease. Create, share, and explore unique digital assets on the blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DappProvider>
      <html lang="en">
        <body className={`${geistSans.variable} antialiased`}>
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </DappProvider>
  );
}
