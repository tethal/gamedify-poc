import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

export default async function Avatar() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <>
        <span className='mx-8 flex items-center'>
          Hello, {session.user?.name}
        </span>
        <LogoutButton />
      </>
    );
  } else {
    return (
      <Link
        className='border shadow-[0px_0px_3px_#000] px-6 py-1.5 rounded-full self-end hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950 '
        href='/login/'
      >
        log in
      </Link>
    );
  }
}
