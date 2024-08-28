import { IoHome } from 'react-icons/io5';
import Link from 'next/link';

interface GoHomeProps {
  className: string;
}

export default function GoHome({ className }: GoHomeProps) {
  return (
    <Link
      href='/'
      className={`${className} bg-[#F1F1F1] border dark:text-white/70 dark:bg-zinc-950 p-4 flex items-center `}
    >
      <IoHome className='text-2xl md:text-3xl lg:text-4xl' />
    </Link>
  );
}
