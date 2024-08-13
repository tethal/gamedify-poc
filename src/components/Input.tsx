import { HTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className='w-full text-cyan-800 shadow-[0px_0px_3px_#000] dark:shadow-[0px_0px_5px_#fff] border p-1.5 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:shadow-[0px_0px_10px_2px_#06B6D4] focus:ring-cyan-500'
      {...props}
    />
  );
}
