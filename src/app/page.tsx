import Link from 'next/link';
import EnterQuizCodeForm from './EnterQuizCodeForm';
import Avatar from './Avatar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <nav className='absolute top-4 right-10 flex justify-end gap-4'>
        <Avatar />
      </nav>
      <div className='flex flex-col justify-center items-center h-[92dvh]'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cyan-500 '>
          AZk game
        </h1>
        {session !== null && (
          <Link href='/quiz/' className='underline'>
            List of quizzes
          </Link>
        )}
        <EnterQuizCodeForm />
      </div>
    </>
  );
}
