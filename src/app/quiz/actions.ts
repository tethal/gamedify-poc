'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { simulateLatency } from '@/lib/util';

export async function createQuiz(name: string) {
  await simulateLatency();
  if (!name) {
    throw Error('name is required');
  }
  const quiz = await prisma.quiz.create({
    data: {
      name,
    },
  });
  revalidatePath('/quiz');
  return quiz;
}

export async function deleteQuiz(id: number) {
  await prisma.quiz.delete({
    where: { id },
  });
  revalidatePath('/');
}
