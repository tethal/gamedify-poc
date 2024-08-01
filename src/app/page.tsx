import Link from 'next/link';
import EnterQuizCodeForm from './EnterQuizCodeForm';
import Avatar from './Avatar'
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className='flex flex-col items-center justify-center'>
      <nav className='flex justify-end gap-4 max-w-7xl w-full'>
        <Avatar />
      </nav>
      <div className='h-[90vh] flex flex-col justify-center items-center '>
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
    </div>
  );
}
