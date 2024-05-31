'use client';

import { AzkGameData } from '@/lib/fetch-game';
import { useAzkGame } from './azk-hook';
import AzkBoard from '@/components/azk/AzkBoard';
import Form from './Form';

export default function AzkGame({ data }: { data: AzkGameData }) {
  const game = useAzkGame(data);

  return (
    <div className='flex  justify-center lg:justify-between p-6 gap-10 items-center w-[min(1200px,98%)]'>
      <div className='relative flex w-2/3'>
        {game.playerOnTurn === 'A' && (
          <div className=' hidden lg:flex absolute top-0 left-0 bg-[#f3f400] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl'>
            Player {game.playerOnTurn}
          </div>
        )}
        <AzkBoard
          className='max-h-[35rem] w-full'
          tileSize={10}
          tileStates={game.tileStates}
          onTileClicked={async index => await game.selectTile(index)}
        />
        {game.playerOnTurn === 'B' && (
          <div className='hidden lg:flex absolute top-0 right-0 bg-[#01e32e] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl'>
            Player {game.playerOnTurn}
          </div>
        )}
      </div>

      {game.currentQuestion && <Form game={game} />}
    </div>
  );
}
