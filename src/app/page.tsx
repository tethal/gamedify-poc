import Link from 'next/link';
import EnterQuizCodeForm from './EnterQuizCodeForm';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Avatar from './Avatar'




export default function Home() {
  return (
      <div className='flex flex-col items-center justify-center'>
        <nav className='flex justify-end gap-4 max-w-7xl w-full'>
          <Avatar />
          <ThemeSwitcher />
        </nav>
        <div className="h-[90vh] flex flex-col justify-center items-center ">
          <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cyan-500 '>AZk game</h1>
          <Link href='/quiz/' className='underline'>
            List of quizzes (TODO hide unless authenticated)
          </Link>
          <EnterQuizCodeForm />
        </div>
      </div>
  );
}
