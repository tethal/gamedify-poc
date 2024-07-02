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
  if (!quiz || quiz.questions.length < 10) {
    throw notFound();
  }
  let row = 1;
  const questions = [];
  // as long as there are enough questions to fill the next row...
  while (quiz.questions.length >= row) {
    // ...randomly pick questions from the remaining ones
    for (let i = 0; i < row; ++i) {
      const randomIndex = Math.floor(Math.random() * quiz.questions.length);
      const { question, answers } = quiz.questions.splice(randomIndex, 1)[0];
      questions.push({
        question,
        answers: answers.map(answer => answer.answer),
      });
    }
    row++;
  }
  return <AzkGame questions={questions} />;
}
