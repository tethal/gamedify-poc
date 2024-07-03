'use client';

import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';
import EndGame from './EndGame'
import PlayerOnTurn from './PlayerOnTurn';
import GoHome from './GoHome';
import { Question } from './defs';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);

  return (
    <>
      {gameState.winner && (
        <EndGame winner={gameState.winner} className={''}/>
      )}
      <div className='flex-1 flex justify-center lg:justify-between items-center relative'>
       
          <div className=' w-full  flex items-center justify-between p-4'>
              <div className='w-full lg:w-2/3 relative '>
                {
                  !gameState.winner && <PlayerOnTurn playerOnTurn={gameState.playerOnTurn} className={ gameState.playerOnTurn === 'A' ? `left-0` : `right-0`} />
                }
                <AzkBoard
                  className='sm:h-[80%] sm:w-[80%] flex'
                  tileSize={10}
                  tileStates={gameState.tileStates}
                  onTileClicked={async index => await gameState.selectTile(index)}
                />
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
      
        {!gameState.winner && <GoHome
          className={`absolute right-0 top-0 lg:bottom-0 lg:top-auto z-10 rounded-full flex-col shadow-xl shadow-cyan-500`}
        />}
      </div>
    </>
  );
}
