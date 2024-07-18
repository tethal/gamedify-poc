import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

export default async function Avatar() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <>
        <span className='mx-8'>Hello, {session.user?.name}</span>
        <LogoutButton />
      </>
    );
  } else {
    return (
      <Link
        className='border px-6 py-1.5 rounded-full hover:text-emerald-900 hover:shadow-[0px_0px_10px_2px_#064E3B] hover:border-emerald-950 '
        href='/login'
      >
        log in
      </Link>
    );
  }
}
