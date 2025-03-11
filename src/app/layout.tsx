import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <header>
          
        </header>
        {children}
      </body>
    </html>
  );
}
