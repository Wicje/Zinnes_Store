import "../shared/styles/globals.css";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

export const metadata = {
  title: "E-Commerc Site",
  description: "Black & white modular build"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
