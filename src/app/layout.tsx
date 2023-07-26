import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Shortener | Seu encurtador de links",
  description: "URL Shortener | Seu encurtador de links simples de usar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
