import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import WinnerPopUp from './WinnerPopUp';
import { COLORS, type Player } from './defs';

interface EndGameProps {
  winner: Player;
  className: string;
}

export default function EndGame({ winner, className }: EndGameProps) {
  const { width, height } = useWindowSize();
  return (
    <div className={`${className}`}>
      <Confetti width={width} height={height} colors={[`${COLORS[winner]}`]} />
      <WinnerPopUp winner={winner} className={''} />
    </div>
  );
}
