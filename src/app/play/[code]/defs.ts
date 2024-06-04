export type Player = 'A' | 'B';

export type TileState = 'empty' | 'selected' | Player;

export interface Question {
  question: string;
  answers: string[];
}

export const COLORS: { [key in TileState]: string } = {
  empty: '#A1A1AA',
  selected: '#3F3F46',
  A: '#f3f400',
  B: '#01e32e',
};
