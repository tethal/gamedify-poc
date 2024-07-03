import Link from 'next/link';
import { AiOutlineRedo } from 'react-icons/ai';
import { COLORS, type Player } from './defs';
import GoHome from './GoHome';


interface WinnerPopUpProps{
    winner: Player,
    className: string
}

export default function WinnerPopUp({ winner, className }: WinnerPopUpProps) {
    return (
      <div className='bg-zinc-950 absolute transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 p-10 py-24 w-[min(26rem,95%)] z-20 text-center text-2xl rounded-xl flex flex-col items-center justify-center '>
        <span className={`text-[${COLORS[winner]}]`}>Player {winner}</span>
        won this game
        <Link
          href='#'
          onClick={() => location.reload()}
          className={`flex items-center justify-center gap-2  px-6 py-1.5 border rounded-full mt-4 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:border-cyan-950`}
        >
          <AiOutlineRedo className='text-4xl' />
          Play again?
        </Link>
        <GoHome
          className={
            'gap-2 border rounded-full px-6 py-1.5 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:border-cyan-950 mt-4'
          }
        />
      </div>
    );
}