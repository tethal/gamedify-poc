import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Avatar from '@/components/auth/Avatar';

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
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Document</title>
      </head>
      <body className='bg-zinc-950 text-white/70 flex flex-col items-center  w-full min-h-screen select-none'>
        <nav className='h-[2em] text-2xl flex items-center mt-4 justify-between gap-4 '>
          <Link
            className=' underline py-1.5 px-6 hover:text-emerald-900 hover:shadow-[0px_0px_10px_2px_#022C22] rounded-full'
            href='/'
          >
            Home
          </Link>
          <Link
            className=' underline py-1.5 px-6 hover:text-emerald-900 hover:shadow-[0px_0px_10px_2px_#022C22] rounded-full'
            href='/demo1'
          >
            SVG Board demo
          </Link>
          <Link
            className=' underline py-1.5 px-6 hover:text-emerald-900 hover:shadow-[0px_0px_10px_2px_#022C22] rounded-full'
            href='/qset'
          >
            DB demo
          </Link>
          <Avatar />
        </nav>
        {children}
      </body>
    </html>
  );
}
