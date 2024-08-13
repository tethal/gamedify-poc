'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { isCodeValid } from '@/lib/util';
import Input from '@/components/Input';
import { FaStarOfLife } from 'react-icons/fa';

export default function EnterQuizCodeForm() {
  const [code, setCode] = useState('');
  const router = useRouter();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (isCodeValid(code)) {
          router.push(`/play/${code}`);
        }
      }}
      className='flex flex-col justify-between p-6 items-center text-2xl md:flex-row md:gap-4'
    >
      <label htmlFor='code' className='text-cyan-500 dark:text-white/70'>
        Quiz code:
      </label>
      <div className='relative my-2'>
        <Input
          type='number'
          id='code'
          name='code'
          value={code}
          onChange={e => {
            setCode(e.target.value);
          }}
          autoFocus
          required
        />
        <span className='text-lg absolute -bottom-7 left-0 flex pl-2 gap-1'>
          <FaStarOfLife className='text-[8px] mt-[4px] ' />
          Please enter quiz code
        </span>
      </div>

      <button
        type='submit'
        className='border shadow-[0px_0px_3px_#000] px-6 py-1.5 rounded-full mt-10 md:mt-0 hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4] hover:dark:border-cyan-950'
      >
        Play
      </button>
    </form>
  );
}
