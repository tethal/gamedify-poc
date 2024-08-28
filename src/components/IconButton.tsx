import { ReactNode } from 'react';

type Color = keyof typeof colors;

interface IconProps {
  children: ReactNode;
  color: Color;
  onClick?: () => void;
  onDoubleClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const colors = {
  red: 'hover:text-red-600 hover:shadow-[0px_0px_10px_2px_#DC2626] hover:border-red-600',
  emerald:
    'hover:text-emerald-600 hover:shadow-[0px_0px_10px_2px_#10B981] hover:border-emerald-600',
  green:
    'hover:text-green-600 hover:shadow-[0px_0px_10px_2px_#16A34A] hover:border-green-600',
  cyan: 'hover:text-cyan-600 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:border-cyan-600',
};

const IconButton = ({
  children,
  color,
  onClick,
  type,
  onDoubleClick,
}: IconProps) => (
  <button
    onClick={onClick}
    onDoubleClick={onDoubleClick}
    type={type || 'button'}
    className={`size-10 flex items-center justify-center p-2 rounded-full border shadow-[0px_0px_3px_#000] ' +
      ${colors[color]}`}
  >
    {children}
  </button>
);

export default IconButton;
