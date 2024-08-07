import { COLORS, type Player } from './defs';

interface PlayerOnTurnProps {
  playerOnTurn: Player;
  className: string;
}

export default function PlayerOnTurn({
  playerOnTurn,
  className,
}: PlayerOnTurnProps) {
  return (
    <div
      className={`${className} hidden lg:flex absolute text-[#09090b] top-6 bg-[${COLORS[playerOnTurn]}] shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_${COLORS[playerOnTurn]}] w-fit aspect-auto py-2 px-6 text-[#27272A] rounded-xl font-bold text-2xl`}
    >
      Player {playerOnTurn}
    </div>
  );
}
