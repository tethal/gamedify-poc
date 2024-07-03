import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GamEdify PoC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-zinc-950 text-white/70  w-[min(1400px,98%)] mx-auto min-h-screen  select-none'>
        {children}
      </body>
    </html>
  );
}
