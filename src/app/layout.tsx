import type { Metadata } from 'next';
import './globals.css';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import GoHome from './play/[code]/GoHome';


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
      <body className='bg-zinc-200 dark:bg-zinc-950 dark:text-white/70  w-[min(1200px,98%)] mx-auto h-dvh grid grid-template-rows-[auto_1fr_auto] p-4 select-none relative'>
        {children}
      </body>
      <footer className='max-w-7xl flex justify-end p-4 gap-4'>
        <GoHome className={''} />
        <ThemeSwitcher />
      </footer>
    </html>
  );
}
