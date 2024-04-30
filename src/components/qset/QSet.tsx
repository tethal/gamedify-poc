import Link from 'next/link';
import prisma from '@/lib/db';
import { unstable_noStore } from 'next/cache';

export default async function QSet() {
  unstable_noStore(); // TODO remove this and use on-demand revalidation
  const questionSets = await prisma.questionSet.findMany({
    include: {
      _count: {
        select: { questions: true },
      },
    },
  });
  return (
    <ul>
      {questionSets.map(qs => (
        <li key={qs.id}>
          <Link className='underline' href={`/qset/${qs.id}`}>
            {qs.name} ({qs._count.questions} questions)
          </Link>{' '}
          -{' '}
          <Link className='underline' href={`/play/${qs.id}`}>
            PLAY
          </Link>
        </li>
      ))}
    </ul>
  );
}
