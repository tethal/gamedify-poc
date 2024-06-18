'use client';

import { type Question } from './defs';
import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';
import { COLORS, type Player } from './defs';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import Link from 'next/link';
import { AiOutlineRedo } from 'react-icons/ai';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);
  const { width, height } = useWindowSize();
  {
    /*TODO: skontrolovat ci to je dobre, pripadne prepisat do typescriptu */
  }

  return (
    <>
      {gameState.winner && (
        <>
          <Confetti
            width={width}
            height={height}
            colors={[`${COLORS[gameState.winner]}`]}
          />
          <div className='bg-zinc-950 absolute transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 p-10 py-24 w-[min(26rem,95%)] z-20 text-center text-2xl rounded-xl flex flex-col items-center justify-center '>
            <span className={`text-[${COLORS[gameState.winner]}]`}>
              Player {gameState.winner}
            </span>
            won this game
            <Link
              href='/'
              className={`flex items-center justify-center  px-6 py-1.5 border rounded-full mt-4`}
            >
              Play again?
              <AiOutlineRedo />
            </Link>
          </div>
        </>
      )}
      <div className='flex justify-center lg:justify-between p-6 gap-10 items-center w-[min(1200px,98%)] relative '>
        <div className='relative w-full h-full lg:w-2/3'>
          {gameState.playerOnTurn === 'A' && !gameState.winner && (
            <div
              className={`hidden lg:flex absolute top-0 left-0  bg-[${COLORS[gameState.playerOnTurn]}] shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_${COLORS[gameState.playerOnTurn]}] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
            >
              Player {gameState.playerOnTurn}
            </div>
          )}
          <AzkBoard
            className='h-full'
            tileSize={10}
            tileStates={gameState.tileStates}
            onTileClicked={async index => await gameState.selectTile(index)}
          />
          {gameState.playerOnTurn === 'B' && !gameState.winner && (
            <div
              className={`hidden lg:flex absolute top-0 right-0  bg-[${COLORS[gameState.playerOnTurn]}] shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_${COLORS[gameState.playerOnTurn]}] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
            >
              Player {gameState.playerOnTurn}
            </div>
          )}
        </div>

        {gameState.currentQuestion && (
          <Form
            playerOnTurn={gameState.playerOnTurn}
            tileLabel={(gameState.selectedIndex + 1).toString()}
            question={gameState.currentQuestion}
            submitAnswer={gameState.checkAnswer}
            className='pt-20'
          />
        )}
      </div>
    </>
  );
}
