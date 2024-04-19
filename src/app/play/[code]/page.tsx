import { type GameData, fetchGameData } from '@/lib/fetch-game';
import AzkGame from '@/components/azk/AzkGame';
import { notFound } from 'next/navigation';

export default async function Play({
  params: { code },
}: {
  params: { code: string };
}) {
  const gameData: GameData = await fetchGameData(code);
  switch (gameData.kind) {
    case 'azk':
      return <AzkGame data={gameData} />;
  }
  notFound();
}
