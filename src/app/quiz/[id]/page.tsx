import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import QuizName from './QuizName';
import { ensureNumber } from '@/lib/util';
import Link from 'next/link';
import QuizCode from './QuizCode';
import QuestionList from './QuestionList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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
      <div className='flex flex-col'>
        <Link className='underline' href='/quiz'>
          Back to list
        </Link>
        <QuizName {...quiz} />
        <QuizCode {...quiz} />
        <QuestionList quizId={quiz.id} questions={quiz.questions} />
      </div>
    </>
  );
}
