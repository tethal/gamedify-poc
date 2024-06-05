'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { convertDbError, isCodeValid, simulateLatency } from '@/lib/util';

// TODO all server actions should validate all inputs

/**
 * Update the name of a quiz.
 * @param id the id of the quiz
 * @param name the new name of the quiz
 * @throws Error if the name is empty, the user is not authorized to
 *               update the quiz, or there is a database error
 *               (e.g. the quiz does not exist)
 */
export async function updateQuizName(name: string, { id }: { id: number }) {
  await simulateLatency();
  if (name === '') {
    return { error: 'Name cannot be empty' };
  }
  // TODO: ensure user is authorized to update this question set
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
  await simulateLatency();
  const code = newCode === '' ? null : newCode;
  if (code !== null && !isCodeValid(code)) {
    return { error: 'Invalid code' };
  }
  // TODO: ensure user is authorized to update this question set
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
  await simulateLatency();
  if (!question) {
    return { error: 'question is required' };
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
  await simulateLatency();
  if (question === '') {
    return { error: 'Question cannot be empty' };
  }
  // TODO: ensure user is authorized to update this question set
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
  await simulateLatency();
  if (!answer) {
    return { error: 'answer is required' };
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
  await simulateLatency();
  if (answer === '') {
    return { error: 'Answer cannot be empty' };
  }
  // TODO: ensure user is authorized to update this question set
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
