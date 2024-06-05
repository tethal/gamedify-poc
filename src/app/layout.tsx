import type { Metadata } from 'next';
import './globals.css';
import Avatar from './Avatar';

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
      <body className='bg-zinc-950 text-white/70 flex flex-col items-center gap-4 w-full h-screen select-none p-6'>
        <nav className='flex justify-end mt-4 max-w-7xl w-full'>
          <Avatar />
        </nav>
        {children}
      </body>
    </html>
  );
}
