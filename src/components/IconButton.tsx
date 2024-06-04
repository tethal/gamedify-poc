import { ReactNode } from 'react';

type Color = keyof typeof colors;

interface IconProps {
  children: ReactNode;
  color: Color;
  onClick?: () => void;
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

const IconButton = ({ children, color, onClick, type }: IconProps) => (
  <button
    onClick={onClick}
    type={type || 'button'}
    className={'inline-block ratio-square p-2 rounded-full ' + colors[color]}
  >
    {children}
  </button>
);

export default IconButton;
