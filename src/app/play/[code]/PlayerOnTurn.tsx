import { COLORS, type Player } from './defs';
import React from 'react';
import useTranslation from '@/hooks/useTranslation';

interface PlayerOnTurnProps {
  playerOnTurn: Player;
  className: string;
}

export default function PlayerOnTurn({
  playerOnTurn,
  className,
}: PlayerOnTurnProps) {
  const { translate } = useTranslation();
  return (
    <div
      className={`${className} hidden lg:flex absolute text-[#09090b] top-6 bg-[${COLORS[playerOnTurn]}] shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_${COLORS[playerOnTurn]}] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
    >
      {translate('player')} {playerOnTurn}
    </div>
  );
}
