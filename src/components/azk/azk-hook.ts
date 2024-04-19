import { useState } from 'react';
import { type AzkGameData } from '@/lib/fetch-game';

export type Player = 'A' | 'B';

export type TileState = 'empty' | 'selected' | Player;

// TODO generate these from the board size
const neighbors = [
  [1, 2],
  [0, 2, 3, 4],
  [0, 1, 4, 5],
  [1, 4, 6, 7],
  [1, 2, 3, 5, 7, 8],
  [2, 4, 8, 9],
  [3, 7],
  [3, 4, 6, 8],
  [4, 5, 7, 9],
  [5, 8],
];

const leftEdge = [0, 1, 3, 6];
const rightEdge = [0, 2, 5, 9];
const bottomEdge = [6, 7, 8, 9];

export const isWinningMove = (
  selectedTileIndex: number,
  tiles: TileState[],
) => {
  // calculate the connected component of same-colored tiles containing the selected tile
  const reachableTiles = new Set<number>();
  const visit = (index: number) => {
    if (
      tiles[index] === tiles[selectedTileIndex] &&
      !reachableTiles.has(index)
    ) {
      reachableTiles.add(index);
      neighbors[index].forEach(neighbor => visit(neighbor));
    }
  };
  visit(selectedTileIndex);

  // check if the reachable tiles include a tile from all three edges
  const touchesEdge = (edge: number[]) =>
    edge.some(tile => reachableTiles.has(tile));
  return (
    touchesEdge(leftEdge) && touchesEdge(rightEdge) && touchesEdge(bottomEdge)
  );
};

export const useAzkGame = (gameData: AzkGameData) => {
  const [tiles, setTiles] = useState<TileState[]>(Array(10).fill('empty'));
  const [playerOnTurn, setPlayerOnTurn] = useState<Player>('A');
  const [winner, setWinner] = useState<Player | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentQuestion =
    selectedIndex === null ? null : gameData.questions[selectedIndex].question;

  const opponentOf = (player: Player) => (player == 'A' ? 'B' : 'A');

  const selectedTile = (selectedIndex: number) => {
    const choosedTile = tiles.map((state, index) =>
      index === selectedIndex ? 'selected' : state,
    );
    setTiles(choosedTile);
  };

  const selectTile = async (index: number) => {
    if (index < 0 || index >= gameData.questions.length) {
      throw new Error('Invalid tile index');
    }
    if (winner) {
      throw new Error('Game is already over');
    }
    if (selectedIndex !== null) {
      throw new Error('Tile already selected');
    }
    if (tiles[index] !== 'empty') {
      throw new Error('Tile already taken');
    }

    setSelectedIndex(index);
    selectedTile(index);
  };

  const checkAnswer = async (answer: string) => {
    if (selectedIndex === null) {
      throw new Error('No tile selected');
    }
    // TODO tolerance for typos/diacritics/case
    const isCorrect = answer == gameData.questions[selectedIndex].answer;
    const tileOwner = isCorrect ? playerOnTurn : opponentOf(playerOnTurn);
    const newTiles = tiles.map((state, index) =>
      index === selectedIndex ? tileOwner : state,
    );
    setTiles(newTiles);
    if (isWinningMove(selectedIndex, newTiles)) {
      setWinner(tileOwner);
      {
        /* IDEA: => confeti vo farbe vitaza */
      }
    }
    setSelectedIndex(null);
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
};
