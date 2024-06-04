import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import QuizName from './QuizName';
import { ensureNumber } from '@/lib/util';
import Link from 'next/link';

export default async function QuizPage({ params }: { params: { id: string } }) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: ensureNumber(params.id) },
    include: { questions: { include: { answers: true } } },
  });
  if (!quiz) {
    notFound();
  }

  return (
    <>
      <Link href='/quiz'>Back to list</Link>
      <QuizName {...quiz} />
      <ul>
        {quiz.questions.map(q => (
          <li key={q.id}>
            Q: {q.question} ... A: {q.answers.map(a => a.answer).join('|')}
          </li>
        ))}
      </ul>
    </>
  );
}
