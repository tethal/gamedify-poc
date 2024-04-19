import { useState } from 'react';

interface FormProps {
  game: any; /* ked som dala type object kricalo to na mna, moze ostat any?? */
}

const Form = ({ game }: FormProps) => {
 
  const [answer, setAnswer] = useState('');
  const currentPlayerColor = game.playerOnTurn === 'A' ? '#f3f400' : '#01e32e';
  const currentPlayerColorHover =
    game.playerOnTurn === 'A' ? '#c72436' : '#0444bd';

  return (
    <form
      className={`fade-in  bg-zinc-950 flex flex-col gap-4 justify-center items-center py-16 px-6 rounded-2xl shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_${currentPlayerColor}]`}
    >
      {/* IDEA: => namiesto shadowu dat border, ktory sa postupne z farebneho bude menit na biely v zavislosti od uplynuteho casu
                    => po uplynuti casu bez odpovede alebo ked sa nestihne odpoved submitnut, okno sa automaticky zavrie a prideli bod superovi
          */}

      <h2 className='text-2xl p-0'>{game.currentQuestion ?? 'none'}</h2>

      <input
        className='border p-2 rounded text-black text-xl'
        type='text'
        placeholder='Type an answer'
        onChange={e => setAnswer(e.target.value)}
      />
      <button
        className={`border rounded-full px-6 py-1.5 text-xl  hover:text-[${currentPlayerColorHover}] hover:border-[${currentPlayerColorHover}] hover:shadow-[0px_0px_10px_20px_${currentPlayerColorHover}]`}
        onClick={async () => await game.checkAnswer(answer)}
      >
        Submit {/*mozno lepsie answer/ submit answer?? */}
      </button>
    </form>
  );
};

export default Form;
