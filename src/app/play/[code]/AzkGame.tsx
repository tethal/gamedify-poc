'use client';

import { type Question } from './defs';
import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);

  return (
    <div className='flex justify-center lg:justify-between p-6 gap-10 items-center w-[min(1200px,98%)]'>
      <div className='relative flex w-2/3'>
        {gameState.playerOnTurn === 'A' && (
          <div className=' hidden lg:flex absolute top-0 left-0 bg-[#f3f400] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl'>
            Player {gameState.playerOnTurn}
          </div>
        )}
        <AzkBoard
          className='max-h-[35rem] w-full'
          tileSize={10}
          tileStates={gameState.tileStates}
          onTileClicked={async index => await gameState.selectTile(index)}
        />
        {gameState.playerOnTurn === 'B' && (
          <div className='hidden lg:flex absolute top-0 right-0 bg-[#01e32e] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl'>
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
