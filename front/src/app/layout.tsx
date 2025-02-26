import type { Metadata } from "next";
import "./globals.css";
import Logo from "../../assets/cm logo.png";

import { Kantumruy_Pro } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header-2/Header-2";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calzados Marea",
  description: "Venta de zapatillas",
  icons: {
    icon: "https://img.freepik.com/vector-premium/diseno-logo-cm_705304-804.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={kantumruy.className}>
      <body className={kantumruy.className}>
        <main>
          <Header />
          <Navbar />
          <Header2/>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
