import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import QuizName from './QuizName';
import { ensureNumber } from '@/lib/util';
import Link from 'next/link';
import QuizCode from './QuizCode';
import QuestionList from './QuestionList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { TiArrowBack } from 'react-icons/ti';
import T from '@/components/T';

export default async function QuizPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  const quiz = await prisma.quiz.findUnique({
    where: { id: ensureNumber(params.id) },
    include: { questions: { include: { answers: true } } },
  });
  if (
    !quiz ||
    (session.user.role !== 'admin' && quiz.ownerId !== session.user.id)
  ) {
    notFound();
  }

  return (
    <>
      <div className='max-w-7xl p-6 mb-20 space-y-4'>
        <Link
          className='flex gap-2 items-center w-fit border shadow-[0px_0px_3px_#000] rounded-full px-6 py-1.5 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950'
          href='/quiz'
        >
          <TiArrowBack />
          <T t='back_to_list' />
        </Link>
        <QuizName {...quiz} />
        <QuizCode {...quiz} />
        <QuestionList quizId={quiz.id} questions={quiz.questions} />
      </div>
    </>
  );
}
