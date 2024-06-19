import Link from 'next/link';
import EnterQuizCodeForm from './EnterQuizCodeForm';
import Avatar from './Avatar';


export default function Home() {
  return (
    <>
      <nav className='flex justify-end mt-4 max-w-7xl w-full'>
        <Avatar />
      </nav>
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h1 className='text-5xl'>AZk game</h1>
      <Link href='/quiz/' className='underline'>
        List of quizzes (TODO hide unless authenticated)
      </Link>
      <EnterQuizCodeForm />
    </div>
    </>
  );
}
