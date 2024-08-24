'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { convertDbError, isCodeValid, isUserAllowedToEdit } from '@/lib/util';

/**
 * Update the name of a quiz.
 * @param id the id of the quiz
 * @param name the new name of the quiz
 * @throws Error if the name is empty, the user is not authorized to
 *               update the quiz, or there is a database error
 *               (e.g. the quiz does not exist)
 */
export async function updateQuizName(name: string, { id }: { id: number }) {
  if (name === '') {
    return { error: 'name_is_required' };
  }
  if (!(await isUserAllowedToEdit(id))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.quiz.update({
      where: { id },
      data: { name },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz`);
  revalidatePath(`/quiz/${id}`);
}

export async function updateQuizCode(newCode: string, { id }: { id: number }) {
  const code = newCode === '' ? null : newCode;
  if (code !== null && !isCodeValid(code)) {
    return { error: 'invalid_code' };
  }
  if (!(await isUserAllowedToEdit(id))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.quiz.update({
      where: { id },
      data: { code },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz`);
  revalidatePath(`/quiz/${id}`);
}

export async function clearQuizCode({ id }: { id: number }) {
  await updateQuizCode('', { id });
}

export async function createQuestion(
  question: string,
  { quizId }: { quizId: number },
) {
  if (!question) {
    return { error: 'question_is_required' };
  }
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.question.create({
      data: {
        quizId,
        question,
      },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz/${quizId}`);
}

export async function deleteQuestion({
  id,
  quizId,
}: {
  id: number;
  quizId: number;
}) {
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.question.delete({
      where: { id },
    });
  } catch (e) {
    return convertDbError(e);
  }
  if (quizId) {
    revalidatePath(`/quiz/${quizId}`);
  }
}

export async function updateQuestion(
  question: string,
  { id, quizId }: { id: number; quizId: number },
) {
  if (question === '') {
    return { error: 'question_is_required' };
  }
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.question.update({
      where: { id },
      data: { question },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz/${quizId}`);
}

export async function createAnswer(
  answer: string,
  { quizId, questionId }: { quizId: number; questionId: number },
) {
  if (!answer) {
    return { error: 'answer_is_required' };
  }
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.answer.create({
      data: {
        questionId,
        answer,
      },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz/${quizId}`);
}

export async function deleteAnswer({
  id,
  quizId,
}: {
  id: number;
  quizId: number;
}) {
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.answer.delete({
      where: { id },
    });
  } catch (e) {
    return convertDbError(e);
  }
  if (quizId) {
    revalidatePath(`/quiz/${quizId}`);
  }
}

export async function updateAnswer(
  answer: string,
  { quizId, id }: { quizId: number; id: number },
) {
  if (answer === '') {
    return { error: 'answer_is_required' };
  }
  if (!(await isUserAllowedToEdit(quizId))) {
    return { error: 'unauthorized' };
  }
  try {
    await prisma.answer.update({
      where: { id },
      data: { answer },
    });
  } catch (e) {
    return convertDbError(e);
  }
  revalidatePath(`/quiz/${quizId}`);
}
