import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guilda — Marketplace de expertos y gamers',
  description:
    'Marketplace premium para reservar sesiones con expertos. Demo visual para validar producto, onboarding, perfiles, reservas y panel de control.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
