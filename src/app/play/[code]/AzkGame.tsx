'use client';

import { COLORS, type Question } from './defs';
import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';
import EndGame from './EndGame'
import PlayerOnTurn from './PlayerOnTurn';
import WinnerPopUp from './WinnerPopUp';
import GoHome from './GoHome';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);

  return (
    <>
      {gameState.winner && (
        <EndGame winner={gameState.winner} className={''}/>
      )}
      <div className='flex justify-center lg:justify-between lg:p-6 items-center relative '>
        <div className='relative w-full lg:w-2/3 lg:h-[90%]'>
          {gameState.playerOnTurn === 'A' && !gameState.winner ? (
            <PlayerOnTurn
              playerOnTurn={gameState.playerOnTurn}
              className={`top-0 left-0`}
            />
          ) : gameState.playerOnTurn === 'B' && !gameState.winner ? (
            <PlayerOnTurn
              playerOnTurn={gameState.playerOnTurn}
              className={`top-0 right-0`}
            />
          ) : (
            ''
          )}
          <AzkBoard
            className='flex justify-center items-center p-10'
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

        {!gameState.winner && <GoHome
          className={`absolute right-0 bottom-0 z-10 rounded-full flex-col shadow-xl shadow-cyan-500`}
        />}
      </div>
    </>
  );
}
