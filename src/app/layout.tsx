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
      <body className='bg-zinc-950 text-white/70 flex flex-col items-center mt-28 md:mt-0 gap-4 w-full h-screen select-none p-6'>
        {children}
      </body>
    </html>
  );
}
