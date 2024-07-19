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
      <body className='bg-zinc-200 dark:bg-zinc-950 dark:text-white/70  w-[min(1200px,98%)] mx-auto h-dvh p-4 select-none relative'>
        {children}
      </body>
    </html>
  );
}
