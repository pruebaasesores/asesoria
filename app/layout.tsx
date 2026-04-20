import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guilda — marketplace de expertos y gamers",
  description:
    "Marketplace automatizado con Next.js, Vercel y Supabase para conectar expertos con clientes y monetizar por comisión."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
