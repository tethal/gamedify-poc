import { describe, expect, it, test } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'
import { TileState, isWinningMove, useAzkGame } from '@/components/azk/azk-hook'
import { act } from 'react-dom/test-utils';

describe('AzkWinner', () => {
  it('should detect a winning move', () => {
    const tiles: TileState[] = [
      /* */           "A",
      /* */        "B", "A",
      /* */      "B", "A", "B",
      /* */   "B", "A", "B", "A"
    ];
    expect(isWinningMove(7, tiles)).toEqual(true);
  });
  it('should not detect a winning move', () => {
    const tiles: TileState[] = [
      /* */         "empty",
      /* */        "B", "A",
      /* */      "B", "A", "B",
      /* */   "B", "A", "B", "A"
    ];
    expect(isWinningMove(7, tiles)).toEqual(false);
  });
});

describe('AzkGame', () => {
  const { result } = renderHook(() => useAzkGame({
    kind: "azk",
    questions: [
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" },
      { question: "Q3", answer: "A3" },
      { question: "Q4", answer: "A4" },
      { question: "Q5", answer: "A5" },
      { question: "Q6", answer: "A6" },
      { question: "Q7", answer: "A7" },
      { question: "Q8", answer: "A8" },
      { question: "Q9", answer: "A9" },
      { question: "Q10", answer: "A10" },
    ]
  }));
  it('should have initial state', () => {
    expect(result.current.playerOnTurn).toEqual('A');
    expect(result.current.winner).toBeNull();
    expect(result.current.currentQuestion).toBeNull();
    expect(result.current.tiles.length).toEqual(4);
    expect(result.current.tiles[1][1].state).toEqual('empty');
  });
  it('should select a tile', async () => {
    await act(async () => {
      await result.current.selectTile(2);
    });
    expect(result.current.playerOnTurn).toEqual('A');
    expect(result.current.winner).toBeNull();
    expect(result.current.currentQuestion).toEqual('Q3');
    expect(result.current.tiles[1][1].state).toEqual('empty');
  });
  it('should give the tile to playerOnTurn on correct answer', async () => {
    await act(async () => {
      expect(await result.current.checkAnswer('A3')).toEqual(true);
    });
    expect(result.current.playerOnTurn).toEqual('B');
    expect(result.current.winner).toBeNull();
    expect(result.current.currentQuestion).toBeNull();
    expect(result.current.tiles[1][1].state).toEqual('A');
  });
  it('should select another tile', async () => {
    await act(async () => {
      await result.current.selectTile(3);
    });
    expect(result.current.playerOnTurn).toEqual('B');
    expect(result.current.winner).toBeNull();
    expect(result.current.currentQuestion).toEqual('Q4');
    expect(result.current.tiles[2][0].state).toEqual('empty');
  });
  it('should give the tile to the opponent on incorrect answer', async () => {
    await act(async () => {
      expect(await result.current.checkAnswer('A2')).toEqual(false);
    });
    expect(result.current.playerOnTurn).toEqual('A');
    expect(result.current.winner).toBeNull();

    expect(result.current.currentQuestion).toBeNull();
    expect(result.current.tiles[2][0].state).toEqual('A');
  });
})
