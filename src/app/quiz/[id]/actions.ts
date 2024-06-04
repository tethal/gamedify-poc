'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { simulateLatency } from '@/lib/util';

/**
 * Update the name of a quiz.
 * @param id the id of the quiz
 * @param name the new name of the quiz
 * @throws Error if the name is empty, the user is not authorized to
 *               update the quiz, or there is a database error
 *               (e.g. the quiz does not exist)
 */
const updateQuizName = async (id: number, name: string) => {
  await simulateLatency();
  if (name === '') {
    return { error: 'Name cannot be empty' };
  }
  // TODO: ensure user is authorized to update this question set
  await prisma.quiz.update({
    where: { id },
    data: { name },
  });
  revalidatePath(`/quiz/${id}`);
};

export { updateQuizName };
