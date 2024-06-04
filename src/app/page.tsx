import Link from 'next/link';
import EnterQuizCodeForm from '@/app/EnterQuizCodeForm';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h1 className='text-5xl'>AZk game</h1>
      <Link href='/quiz/' className='underline'>
        List of quizzes (TODO hide unless authenticated)
      </Link>
      <EnterQuizCodeForm />
    </div>
  );
}
