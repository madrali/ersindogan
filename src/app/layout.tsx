import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="p-4 md:p-12 w-full flex justify-center">
          <Navbar />
        </div>
        <main className="flex-grow flex flex-col justify-center">
          <div className="flex flex-col justify-center p-4 md:p-12">
            <div className="container mx-auto">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
