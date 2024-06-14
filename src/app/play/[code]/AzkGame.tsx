'use client';

import { type Question } from './defs';
import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';
import { COLORS, type Player } from './defs';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);
  const { width, height } = useWindowSize();
  {
    /*TODO: skontrolovat ci to je dobre, pripadne prepisat do typescriptu */
  }

  return (
    <div className='flex justify-center lg:justify-between p-6 gap-10 items-center w-[min(1200px,98%)]'>
      {gameState.winner && (
        <Confetti
          width={width}
          height={height}
          colors={[`${COLORS[gameState.winner]}`]}
        />
      )}
      <div className='relative flex w-2/3'>
        {(gameState.playerOnTurn === 'A' && !gameState.winner) && (
          <div
            className={`hidden lg:flex absolute top-0 left-0  bg-[${COLORS[gameState.playerOnTurn]}]  w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
          >
            Player {gameState.playerOnTurn}
          </div>
        )}
        <AzkBoard
          className='max-h-[35rem] w-full'
          tileSize={10}
          tileStates={gameState.tileStates}
          onTileClicked={async index => await gameState.selectTile(index)}
        />
        {(gameState.playerOnTurn === 'B' && !gameState.winner) &&  (
          <div
            className={`hidden lg:flex absolute top-0 right-0  bg-[${COLORS[gameState.playerOnTurn]}] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
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
        />
      )}
    </div>
  );
}
