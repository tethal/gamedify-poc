'use client';

import { AzkGameData } from '@/lib/fetch-game';
import { useAzkGame } from './azk-hook';
import AzkBoard from '@/components/azk/AzkBoard';
import Form from './Form';

export default function AzkGame({ data }: { data: AzkGameData }) {
  const game = useAzkGame(data);

  return (
    <div className='flex justify-between gap-10 items-center w-[min(1200px,98%)] flex-wrap'>
      <AzkBoard
        className='max-h-[35rem] w-2/3'
        tileSize={10}
        tileStates={game.tileStates}
        onTileClicked={async index => await game.selectTile(index)}
      />

      {game.currentQuestion && <Form game={game} />}
    </div>
  );
}
