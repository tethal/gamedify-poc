import { calcPolygonVertices } from '@/lib/azk';
import { type TileState } from '@/components/azk/azk-hook';

interface TileProps {
  x: number;
  y: number;
  label: string;
  size: number;
  state: TileState;
  onClick: () => any;
}

const COLORS: { [key in TileState]: string } = {
  empty: '#A1A1AA',
  selected: '#3F3F46',
  A: '#f3f400',
  B: '#01e32e',
};

export default function AzkTile({
  x,
  y,
  label,
  size,
  state,
  onClick,
}: TileProps) {
  const points = calcPolygonVertices(6, size, 30)
    .map(({ x, y }) => `${x},${y}`)
    .join(' ');
  return (
    <g
      className='cursor-pointer select-none '
      transform={`translate(${x}, ${y})`}
      onClick={() => onClick()}
    >
      <g
        className={
          state === 'empty' ? `hover:scale-90 transition-all duration-300` : ''
        }
        fill={COLORS[state]}
      >
        <polygon points={points} />
        <text
          x='0'
          y='1'
          fontWeight='bold'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize={size * 0.8}
          fill={state === 'empty' || state === 'selected' ? 'white' : '#27272A'}
        >
          {label}
        </text>
      </g>
    </g>
  );
}
