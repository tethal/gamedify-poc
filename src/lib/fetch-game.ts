import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

export interface Question {
  question: string;
  answer: string;
}

export interface AzkGameData {
  kind: 'azk';
  questions: Question[];
}

export type GameData = AzkGameData;

export const fetchGameData = async (gameCode: string): Promise<GameData> => {
  if (!/^\d+$/.test(gameCode)) {
    throw notFound();
  }
  const id = parseInt(gameCode);
  const questionSet = await prisma.questionSet.findUnique({
    where: { id },
    include: { questions: true },
  });
  const boardSize = 10; // TODO support different board sizes
  if (!questionSet || questionSet.questions.length < boardSize) {
    throw notFound();
  }
  // TODO shuffle questions and return only boardSize questions
  return {
    kind: 'azk',
    questions: questionSet.questions,
  };
};
