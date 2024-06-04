import { useState } from 'react';
import { COLORS, type Player } from './defs';

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
  const currentPlayerColor = COLORS[playerOnTurn];
  // TODO these colors do not seem to be visible anywhere in the UI
  const currentPlayerColorHover = playerOnTurn === 'A' ? '#c72436' : '#0444bd';

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        await submitAnswer(answer);
      }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:static  lg:w-fit lg:min-h-fit lg:py-20 fade-in  bg-zinc-950 flex flex-col gap-4 justify-center items-center w-[min(90%)] p-10 min-h-[38rem] rounded-2xl shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_${currentPlayerColor}]`}
    >
      {/* TODO namiesto shadowu dat border, ktory sa postupne z farebneho bude menit na biely v zavislosti od uplynuteho casu
                    => po uplynuti casu bez odpovede alebo ked sa nestihne odpoved submitnut, okno sa automaticky zavrie a prideli bod superovi
          */}
      <p className='bg-gray-700 size-14 text-2xl flex justify-center items-center font-bold lg:hidden'>
        {tileLabel}
      </p>{' '}
      {/*dat do tvaru polygonu*/}
      <h2 className='text-2xl p-0'>{question}</h2>
      <input
        className='border p-2 rounded text-black text-xl'
        type='text'
        placeholder='Type an answer'
        onChange={e => setAnswer(e.target.value)}
      />
      <button
        className={`border rounded-full px-6 py-1.5 text-xl  hover:text-[${currentPlayerColorHover}] hover:border-[${currentPlayerColorHover}] hover:shadow-[0px_0px_10px_20px_${currentPlayerColorHover}]`}
      >
        Submit {/* TODO: translate to czech */}
      </button>
    </form>
  );
};

export default Form;
