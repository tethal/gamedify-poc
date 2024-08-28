import Link from 'next/link';
import { AiOutlineRedo } from 'react-icons/ai';
import { COLORS, type Player } from './defs';
import GoHome from './GoHome';
import useTranslation from '@/hooks/useTranslation';

interface WinnerPopUpProps {
  winner: Player;
  className: string;
}

export default function WinnerPopUp({ winner, className }: WinnerPopUpProps) {
  const { translate } = useTranslation();
  return (
    <div className='bg-[#F1F1F1] dark:bg-zinc-950 border shadow-[0px_0px_3px_#000] dark:shadow-[0px_0px_3px_#fff] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-10 py-24 w-[min(26rem,95%)] z-20 text-center text-2xl rounded-xl flex flex-col items-center justify-center '>
      <span className={`text-[${COLORS[winner]}] text-4xl font-bold`}>
        {translate('player')} {winner}
      </span>
      {translate('won')}
      <Link
        href='#'
        onClick={() => location.reload()}
        className={`flex items-center justify-center gap-2  px-6 py-1.5 border shadow-[0px_0px_3px_#000]  rounded-full mt-4 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950`}
      >
        <AiOutlineRedo className='text-4xl' />
        {translate('play_again')}
      </Link>
      <GoHome
        className={
          'gap-2 border shadow-[0px_0px_3px_#000] rounded-full px-6 py-1.5 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950  mt-4'
        }
      />
    </div>
  );
}
