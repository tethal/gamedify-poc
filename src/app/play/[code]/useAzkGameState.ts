import { useState } from 'react';
import { type Question, type Player, type TileState } from './defs';

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

const isWinningMove = (selectedTileIndex: number, tiles: TileState[]) => {
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

export default function useAzkGameState(questions: Question[]) {
  const [tiles, setTiles] = useState<TileState[]>(Array(10).fill('empty'));
  const [playerOnTurn, setPlayerOnTurn] = useState<Player>('A');
  const [winner, setWinner] = useState<Player | null>(null);

  const selectedIndex = tiles.findIndex(tile => tile === 'selected');
  const currentQuestion =
    selectedIndex === -1 ? null : questions[selectedIndex].question;

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
    const isCorrect = questions[selectedIndex].answers.some(a => {
      // TODO tolerance for typos/diacritics/case
      return a.toLowerCase() == answer.toLowerCase();
    });
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
