'use client';

import { AzkGameData } from '@/lib/fetch-game';
import { useAzkGame } from './azk-hook';
import { useState } from 'react';
import AzkBoard from '@/components/azk/AzkBoard';
import AzkTile from './AzkTile';

export default function AzkGame({ data }: { data: AzkGameData }) {
  const [answer, setAnswer] = useState('');
  const game = useAzkGame(data);

  const currentPlayerColor = game.playerOnTurn === 'A' ? '#EB4457' : '#2764EB';
  const currentPlayerColorHover =
    game.playerOnTurn === 'A' ? '#c72436' : '#0444bd';

  return (
    <div className='flex justify-center items-center w-[min(1200px,98%)] pt-4'>
      <AzkBoard
        className='max-h-[35rem] ml-20'
        tileSize={10}
        tileStates={game.tileStates}
        onTileClicked={async index => await game.selectTile(index)}
      />
      <div className='self-start mt-10 text-4xl p-6 space-y-4'>
        <p className=''>Player on turn: {game.playerOnTurn}</p>
        <p>Winner: {game.winner ?? '???'}</p>
        {/* IDEA: => confeti vo farbe vitaza */}
      </div>
      {game.currentQuestion && (
        <div
          className={`fade-in absolute bg-zinc-950 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] flex flex-col gap-4 justify-center items-center py-16 px-6 rounded-2xl shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_${currentPlayerColor}]`}
        >
          {/* IDEA: => namiesto shadowu dat borde, ktory sa postupne z farebneho bude menit na biely v zavislosti od uplynuteho casu
                    => po uplynuti casu bez odpovede alebo ked sa nestihne odpoved submitnut, okno sa automaticky zavrie a prideli bod superovi
          */}
          {/* //TODO: dat stvorec do tvaru polygonu  */}
          <span
            className={`flex justify-center items-center border size-20 text-5xl`}
          >
            {game.selectedIndex && game.selectedIndex + 1}
          </span>
          <h2 className='text-2xl p-0'>{game.currentQuestion ?? 'none'}</h2>

          <input
            className='border p-2 rounded text-black text-xl'
            type='text'
            placeholder='Type an answer'
            onChange={e => setAnswer(e.target.value)}
          />
          <button
            className={`border rounded-full px-6 py-1.5 text-xl  hover:text-[${currentPlayerColorHover}] hover:border-[${currentPlayerColorHover}] hover:shadow-[0px_0px_10px_20px_${currentPlayerColorHover}]`}
            onClick={async () => await game.checkAnswer(answer)}
          >
            Submit {/*mozno lepsie answer/ submit answer?? */}
          </button>
        </div>
      )}
    </div>
  );
}
