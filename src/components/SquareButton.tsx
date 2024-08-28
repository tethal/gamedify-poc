import { ReactNode } from 'react';

interface SquareButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const SquareButton = ({ children, onClick }: SquareButtonProps) => {
  return (
    <button
      className='px-4 py-2 rounded-md bg-gray-800 text-white hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4]'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SquareButton;
