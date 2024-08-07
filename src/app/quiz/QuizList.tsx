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
          <th className='p-3'>Code</th>
          <th className='p-3'>Quiz name</th>
          <th className='p-3'>Questions</th>
          <th className='p-3'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {quizzes.map(quiz => (
          <tr key={quiz.id} className=''>
            <td className='p-3 border'>{quiz.code}</td>
            <td className='p-3 border'>{quiz.name}</td>
            <td className='p-3 border'>{quiz._count.questions}</td>
            <td className='p-3 border mx-auto'>
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
