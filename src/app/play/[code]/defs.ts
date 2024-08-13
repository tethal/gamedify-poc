export type Player = 'A' | 'B';

export type TileState = 'empty' | 'selected' | Player;

export interface Question {
  question: string;
  answers: string[];
}

export const COLORS: { [key in TileState]: string } = {
  empty: '#A1A1AA',
  selected: '#3F3F46',
  A: '#FDB827',
  B: '#2563EB',
};

export const triangular = (n: number) => (n * (n + 1)) / 2;
export const triangularInverse = (n: number) =>
  Math.floor((Math.sqrt(1 + 8 * n + 1) - 1) / 2);
