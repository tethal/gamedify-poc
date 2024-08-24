import type { Metadata } from 'next';
import './globals.css';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import GoHome from './play/[code]/GoHome';
import LanguageButton from '@/components/LanguageButton';

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
      <body className='bg-[#F1F1F1] dark:bg-zinc-950 dark:text-white/70 relative grid min-h-dvh h-full'>
        {children}
        <footer className='absolute bottom-6 right-6 flex mx-auto justify-end p-6 gap-6'>
          <GoHome
            className={
              'gap-2 border shadow-[0px_0px_3px_#000] rounded-full px-6 py-1.5 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950'
            }
          />
          <ThemeSwitcher />
          <LanguageButton lang='cs' />
          <LanguageButton lang='sk' />
          <LanguageButton lang='en' />
        </footer>
      </body>
    </html>
  );
}
