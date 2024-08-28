import Link from 'next/link';
import prisma from '@/lib/db';
import { deleteQuiz } from './actions';
import DeleteButton from '@/components/DeleteButton';
import EditButton from '@/components/EditButton';
import { MdPlayArrow } from 'react-icons/md';
import IconButton from '@/components/IconButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import T from '@/components/T';

export default async function QuizList() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  const quizzes = await prisma.quiz.findMany({
    include: {
      _count: {
        select: { questions: true },
      },
      owner: { select: { name: true } },
    },
    where: session.user.role === 'admin' ? {} : { ownerId: session.user.id },
  });
  quizzes.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <table>
      <thead>
        <tr>
          <th className='p-3 border border-zinc-600'>
            <T t='quiz_code' />
          </th>
          <th className='p-3 border border-zinc-600'>
            <T t='quiz_name' />
          </th>
          <th className='p-3 border border-zinc-600'>
            <T t='question_count' />
          </th>
          <th className='p-3 border border-zinc-600'>
            <T t='actions' />
          </th>
        </tr>
      </thead>
      <tbody>
        {quizzes.map(quiz => (
          <tr key={quiz.id} className=''>
            <td className='p-3 border border-zinc-600 text-center'>
              {quiz.code}
            </td>
            <td className='p-3 border border-zinc-600'>{quiz.name}</td>
            <td className='p-3 border border-zinc-600 text-center'>
              {quiz._count.questions}
            </td>
            <td className='p-3 border border-zinc-600 text-center space-x-3'>
              <Link href={`/quiz/${quiz.id}`}>
                <EditButton />
              </Link>
              <DeleteButton action={deleteQuiz} args={{ id: quiz.id }} />
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
