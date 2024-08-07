'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { convertDbError, isUserAllowedToEdit } from '@/lib/util';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function createQuiz(name: string, {}: {}) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return { error: 'Unauthorized' };
  }
  if (!name) {
    return { error: 'name is required' };
  }
  try {
    await prisma.quiz.create({
      data: {
        name,
        ownerId: session.user.id,
      },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath('/quiz');
}

export async function deleteQuiz({ id }: { id: number }) {
  if (!(await isUserAllowedToEdit(id))) {
    return { error: 'Unauthorized' };
  }
  try {
    await prisma.quiz.delete({
      where: { id },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath('/');
}
