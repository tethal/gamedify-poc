'use client';

import { AzkGameData } from '@/lib/fetch-game';
import { useAzkGame } from './azk-hook';
import { useState } from 'react';
import AzkBoard from '@/components/azk/AzkBoard';
import AzkTile from './AzkTile';

export default function AzkGame({ data }: { data: AzkGameData }) {
  const [answer, setAnswer] = useState('');
  const game = useAzkGame(data);

  const currentPlayerColor = game.playerOnTurn === 'A' ? '#EB4457' : '#2764EB' 
 
  return (
    <>
      playerOnTurn: {game.playerOnTurn}
      <br />
      winner: {game.winner ?? 'none'}
      <br />
      <AzkBoard
        className='h-screen w-screen bg-zinc-950'
        tileSize={10}
        tileStates={game.tileStates}
        onTileClicked={async index => await game.selectTile(index)}
      />
      {game.currentQuestion && (
        <div
          className={`absolute bg-zinc-950 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] flex flex-col justify-center items-center py-16 px-6 rounded-2xl shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_${currentPlayerColor}]`}
        >
          {/* //TODO: dat do tvaru polygonu  */}
          <div
            className={`flex justify-center items-center border size-20 text-5xl`}
          >
            <p>{game.selectedIndex && game.selectedIndex + 1}</p>
          </div>
          currentQuestion: {game.currentQuestion ?? 'none'}
          <br />
          <input
            className='border p-2 mr-2 text-black'
            type='text'
            placeholder='answer'
            onChange={e => setAnswer(e.target.value)}
          />
          <button
            className='border p-2'
            onClick={async () => await game.checkAnswer(answer)}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}
