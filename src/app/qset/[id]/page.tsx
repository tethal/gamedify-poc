import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import QSetNameView from '@/components/qset/QSetNameView';

const ensureNumber = (id: string) => {
  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }
  return Number.parseInt(id);
};

const fetchQuestionSet = async (id: number) => {
  const questionSet = await prisma.questionSet.findUnique({
    where: { id },
    include: { questions: true },
  });
  if (!questionSet) {
    notFound();
  }
  return questionSet;
};

export default async function QSetEdit({ params }: { params: { id: string } }) {
  const id = ensureNumber(params.id);
  const questionSet = await fetchQuestionSet(id);
  return (
    <>
      <QSetNameView questionSet={questionSet} />
      <ul>
        {questionSet.questions.map(q => (
          <li key={q.id}>
            Q: {q.question} ... A: {q.answer}
          </li>
        ))}
      </ul>
    </>
  );
}
