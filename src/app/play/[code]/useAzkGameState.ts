import { useState } from 'react';
import {
  type Player,
  type Question,
  type TileState,
  triangular,
  triangularInverse,
} from './defs';

// Normalize a string by removing diacritics and converting to lowercase
const normalize = (string: string) =>
  string
    .normalize('NFKD')
    .trim()
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

const DIRS = [
  [-1, -1], // top left
  [0, -1], // top right
  [-1, 0], // left
  [1, 0], // right
  [0, 1], // bottom left
  [1, 1], // bottom right
];

const createWinDetector = (rows: number) => {
  //          0,0
  //       0,1   1,1
  //    0,2   1,2   2,2
  // 0,3   1,3   2,3   3,3
  const tileCoords = Array.from({ length: rows }).map((_, row) => {
    return Array.from({ length: row + 1 }, (_, col) => {
      const index = triangular(row) + col;
      return { index, col, row };
    });
  });

  const isValidCoords = (col: number, row: number) => {
    return row >= 0 && col >= 0 && row < rows && col <= row;
  };

  // given tile coordinates, return the coordinates of neighboring tiles
  const neighbors = (c0: number, r0: number) => {
    return DIRS.flatMap(([dc, dr]) => {
      const col = c0 + dc;
      const row = r0 + dr;
      return isValidCoords(col, row) ? [tileCoords[row][col]] : [];
    });
  };

  const findByIndex = (index: number) => {
    return tileCoords.flat().find(({ index: i }) => i === index)!;
  };

  return (selectedTileIndex: number, tileStates: TileState[]) => {
    const player = tileStates[selectedTileIndex];
    const visitedTiles: { col: number; row: number }[] = [];

    const isVisited = (col: number, row: number) => {
      return visitedTiles.some(tile => tile.col === col && tile.row === row);
    };

    const visit = ({ col, row }: { col: number; row: number }) => {
      visitedTiles.push({ col, row });
      neighbors(col, row)
        .filter(({ index }) => tileStates[index] === player)
        .filter(({ col, row }) => !isVisited(col, row))
        .forEach(visit);
    };
    visit(findByIndex(selectedTileIndex));
    const leftEdge = visitedTiles.some(({ col }) => col === 0);
    const rightEdge = visitedTiles.some(({ col, row }) => col === row);
    const bottomEdge = visitedTiles.some(({ row }) => row === rows - 1);
    return leftEdge && rightEdge && bottomEdge;
  };
};

export default function useAzkGameState(questions: Question[]) {
  const [tiles, setTiles] = useState<TileState[]>(
    Array(questions.length).fill('empty'),
  );
  const [playerOnTurn, setPlayerOnTurn] = useState<Player>('A');
  const [winner, setWinner] = useState<Player | null>(null);

  const selectedIndex = tiles.findIndex(tile => tile === 'selected');
  const currentQuestion =
    selectedIndex === -1 ? null : questions[selectedIndex].question;

  const isWinningMove = createWinDetector(triangularInverse(questions.length));

  const opponentOf = (player: Player) => (player == 'A' ? 'B' : 'A');

  const selectTile = async (index: number) => {
    if (index < 0 || index >= questions.length) {
      throw new Error('Invalid tile index');
    }
    if (winner) {
      throw new Error('Game is already over');
    }
    if (selectedIndex !== -1) {
      throw new Error('Tile already selected');
    }
    if (tiles[index] !== 'empty') {
      throw new Error('Tile already taken');
    }
    setTiles(tiles.map((state, i) => (i === index ? 'selected' : state)));
  };

  const checkAnswer = async (answer: string) => {
    if (selectedIndex === -1) {
      throw new Error('No tile selected');
    }
    const normalizedAnswer = normalize(answer);
    const isCorrect = questions[selectedIndex].answers.some(
      a => normalize(a) == normalizedAnswer,
    );
    const tileOwner = isCorrect ? playerOnTurn : opponentOf(playerOnTurn);
    const newTiles = tiles.map((state, index) =>
      index === selectedIndex ? tileOwner : state,
    );
    setTiles(newTiles);
    if (isWinningMove(selectedIndex, newTiles)) {
      setWinner(tileOwner);
    }
    setPlayerOnTurn(opponentOf(playerOnTurn));
    return isCorrect;
  };

  return {
    playerOnTurn,
    winner,
    currentQuestion,
    tileStates: tiles,
    selectTile,
    checkAnswer,
    selectedIndex,
  };
}
