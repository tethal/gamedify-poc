import { useState } from 'react';
import { COLORS, type Player } from './defs';
import Input from '@/components/Input';

interface FormProps {
  playerOnTurn: Player;
  tileLabel: string;
  question: string;
  submitAnswer: (answer: string) => Promise<boolean>;
}

const Form = ({
  playerOnTurn,
  tileLabel,
  question,
  submitAnswer,
}: FormProps) => {
  const [answer, setAnswer] = useState('');

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        await submitAnswer(answer);
      }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:translate-x-6 md:translate-y-6 md:static  md:self-center md:h-fit md:max-w-lg  md:items-center px-8 py-16  fade-in bg-zinc-200 dark:text-white/70 dark:bg-zinc-950 flex flex-col gap-4 justify-center items-center w-[min(90%)] h-[90%] rounded-2xl shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_${COLORS[playerOnTurn]}]`}
    >
      <p className='bg-gray-700 size-14 text-2xl flex justify-center items-center font-bold lg:hidden'>
        {tileLabel}
      </p>
      {/*TODO: dat do tvaru polygonu*/}
      <h2 className='text-2xl p-0'>{question}</h2>
      <Input
        type='text'
        placeholder='Type an answer'
        onChange={e => setAnswer(e.target.value)}
        autoFocus
      />
      <button
        className={`border rounded-full px-6 py-1.5 text-xl  hover:text-[${COLORS[playerOnTurn]}] hover:border-[${COLORS[playerOnTurn]}]  hover:shadow-[0px_0px_10px_2px_${COLORS[playerOnTurn]}] `}
      >
        Submit
        {/* TODO: translate to czech - Odpovedet ?, pripadne spravit celu hru v troch jazykovych permutaciach CZ/SK/EN */}
      </button>
    </form>
  );
};

export default Form;
