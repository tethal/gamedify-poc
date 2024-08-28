import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`${className} gap-2 border shadow-[0px_0px_3px_#000] rounded-full px-6 py-1.5 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950`}
    >
      {children}
    </button>
  );
};

export default Button;
