'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { convertDbError, simulateLatency } from '@/lib/util';

export async function createQuiz(name: string, {}: {}) {
  await simulateLatency();
  if (!name) {
    return { error: 'name is required' };
  }
  try {
    await prisma.quiz.create({
      data: {
        name,
      },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath('/quiz');
}

export async function deleteQuiz({ id }: { id: number }) {
  try {
    await prisma.quiz.delete({
      where: { id },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath('/');
}
