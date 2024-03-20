import { useState } from "react";
import { type AzkGameData } from "@/lib/fetch-game";

export type Player = "A" | "B";

export type TileState = "empty" | Player;

export const useAzkGame = (gameData: AzkGameData) => {
  const [tiles, setTiles] = useState<TileState[]>(Array(10).fill("empty"));

  const [playerOnTurn, setPlayerOnTurn] = useState<Player>("A");
  const [winner, setWinner] = useState<Player | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentQuestion = selectedIndex === null ? null : gameData.questions[selectedIndex].question;

  const opponentOf = (player: Player) => player == "A" ? "B" : "A";

  const selectTile = async (index: number) => {
    if (index < 0 || index >= gameData.questions.length) {
      throw new Error("Invalid tile index");
    }
    if (winner) {
      throw new Error("Game is already over");
    }
    if (selectedIndex !== null) {
      throw new Error("Tile already selected");
    }
    if (tiles[index] !== "empty") {
      throw new Error("Tile already taken");
    }
    setSelectedIndex(index);
  }

  const checkAnswer = async (answer: string) => {
    if (selectedIndex === null) {
      throw new Error("No tile selected");
    }
    // TODO tolerance for typos/diacritics/case 
    const isCorrect = answer == gameData.questions[selectedIndex].answer;
    setTiles(tiles.map((state, index) => index === selectedIndex ? (isCorrect ? playerOnTurn : opponentOf(playerOnTurn)) : state));
    // check if the player has won
    setSelectedIndex(null);
    setPlayerOnTurn(opponentOf(playerOnTurn));
    return isCorrect;
  }

  return {
    playerOnTurn,
    winner,
    currentQuestion,
    tiles: [[0], [1, 2], [3, 4, 5], [6, 7, 8, 9]].map(row => row.map(index => { return { index, state: tiles[index] } })),
    selectTile,
    checkAnswer,
  }
}
