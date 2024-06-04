import { HTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return <input className='text-black p-1.5 rounded-xl' {...props} />;
}
