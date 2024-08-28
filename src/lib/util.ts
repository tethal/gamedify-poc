import { notFound } from 'next/navigation';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';

export function isCodeValid(code: string): boolean {
  return /^[0-9]{4,8}$/.test(code);
}

export function ensureNumber(id: string) {
  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }
  return Number.parseInt(id);
}

export function convertDbError(e: any) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2002') {
      return { error: 'code_most_be_unique' };
    }
  }
  return { error: 'db_error' };
}

export async function isUserAllowedToEdit(quizId: number) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }
  if (session.user.role !== 'admin') {
    let quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
    if (!quiz || quiz.ownerId !== session.user.id) {
      return false;
    }
  }
  return true;
}
