import Header from "@/components/header/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased w-full h-dvh bg-[#D98324]"
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
