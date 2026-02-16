import "./globals.css";
import Navbar from "@/modules/layout/Navbar";
import Footer from "@/modules/layout/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Rawblox",
  description: "Streetwear Ecommerce"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
