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
  empty: '#808080',
  A: '#EB4457',
  B: '#2764EB',
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
        className='hover:scale-90 transition-all duration-300 '
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
          fill='#ddd'
        >
          {label}
        </text>
      </g>
    </g>
  );
}
