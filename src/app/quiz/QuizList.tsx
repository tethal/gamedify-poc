import Link from 'next/link';
import prisma from '@/lib/db';
import { deleteQuiz } from './actions';
import DeleteButton from '@/components/DeleteButton';
import EditButton from '@/components/EditButton';
import { MdAdd, MdClose, MdPlayArrow } from 'react-icons/md';
import IconButton from '@/components/IconButton';

export default async function QuizList() {
  const quizzes = await prisma.quiz.findMany({
    include: {
      _count: {
        select: { questions: true },
      },
    },
  });
  quizzes.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <table>
      <thead>
        <tr>
          <th className='p-3'>Code</th>
          <th className='p-3'>Quiz name</th>
          <th className='p-3'>Questions</th>
          <th className='p-3'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {quizzes.map(quiz => (
          <tr key={quiz.id}>
            <td className='p-3'>{quiz.code}</td>
            <td className='p-3'>{quiz.name}</td>
            <td className='p-3'>{quiz._count.questions}</td>
            <td className='p-3'>
              <Link href={`/quiz/${quiz.id}`}>
                <EditButton />
              </Link>
              <DeleteButton action={deleteQuiz} idArg={quiz.id} />
              {quiz.code && (
                <Link className='underline' href={`/play/${quiz.code}`}>
                  <IconButton color='green'>
                    <MdPlayArrow />
                  </IconButton>
                </Link>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
