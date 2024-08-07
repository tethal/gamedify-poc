import { COLORS, type TileState } from './defs';

interface TileProps {
  x: number;
  y: number;
  label: string;
  size: number;
  state: TileState;
  onClick: () => any;
}

/**
 * Calculate the vertices of a regular polygon.
 * @param n the number of vertices
 * @param size the radius of the polygon
 * @param rotation the rotation of the polygon in degrees (0 means the first vertex is on the right)
 */
const calcPolygonVertices = (
  n: number,
  size: number,
  rotation: number = 0,
): { x: number; y: number }[] => {
  return Array.from(Array(n), (_, i) => {
    const angleRad = (Math.PI / 180) * ((360 * i) / n + rotation);
    return { x: size * Math.cos(angleRad), y: size * Math.sin(angleRad) };
  });
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
          fill={state === 'empty' || state === 'selected' ? 'white' : '#09090b'}
        >
          {label}
        </text>
      </g>
    </g>
  );
}
