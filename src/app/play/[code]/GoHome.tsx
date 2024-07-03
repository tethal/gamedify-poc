import { IoHome } from 'react-icons/io5';
import Link from 'next/link';

interface GoHomeProps {
    className: string

}


export default function GoHome({className}: GoHomeProps){
    return (
      <Link href='/' className={`${className} bg-zinc-950 p-4 flex items-center `}>
        <IoHome className='text-4xl' />
        Go Home
      </Link>
    );
}