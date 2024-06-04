import AzkGame from './AzkGame';
import { notFound } from 'next/navigation';
import { isCodeValid } from '@/lib/util';
import prisma from '@/lib/db';

interface PlayPageProps {
  params: {
    code: string;
  };
}

export default async function PlayPage({ params: { code } }: PlayPageProps) {
  if (!isCodeValid(code)) {
    throw notFound();
  }
  const quiz = await prisma.quiz.findUnique({
    where: { code },
    include: { questions: { include: { answers: true } } },
  });
  const boardSize = 10; // TODO support different board sizes
  if (!quiz || quiz.questions.length < boardSize) {
    throw notFound();
  }
  // TODO shuffle questions and return only boardSize questions
  const questions = quiz.questions.map(question => ({
    question: question.question,
    answers: question.answers.map(answer => answer.answer),
  }));
  return <AzkGame questions={questions} />;
}
