import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guilda — coaching gamer premium',
  description:
    'Reserva coaches y jugadores top de Fortnite, Valorant y League of Legends. Perfiles premium, calendario y pago dentro de la plataforma.',
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
