'use client';

import useAzkGameState from './useAzkGameState';
import AzkBoard from './AzkBoard';
import Form from './Form';
import EndGame from './EndGame';
import PlayerOnTurn from './PlayerOnTurn';
import GoHome from './GoHome';
import { Question } from './defs';

export default function AzkGame({ questions }: { questions: Question[] }) {
  const gameState = useAzkGameState(questions);

  return (
    <>
      {gameState.winner && <EndGame winner={gameState.winner} className={''} />}
      <div className='grid gap-2 md:grid-cols-2 relative px-4'>
        <div className='relative self-center'>
          {!gameState.winner && (
            <PlayerOnTurn
              playerOnTurn={gameState.playerOnTurn}
              className={gameState.playerOnTurn === 'A' ? `left-6` : `right-6`}
            />
          )}
          <AzkBoard
            className='p-6 mb-14 md:mb-0'
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
    </>
  );
}
