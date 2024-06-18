'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { isCodeValid } from '@/lib/util';
import Input from '@/components/Input';
import { FaStarOfLife } from 'react-icons/fa';

export default function EnterQuizCodeForm() {
  const [code, setCode] = useState('');
  const router = useRouter();
  // TODO: server action which:
  //  - checks if the quiz code is valid
  //  - shuffles the questions
  //  - creates a new game (under a new game code)
  //  - redirects to the /play/:code page
  // For now, the /play/:code page accepts quiz codes directly
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
      <label htmlFor='code'>Quiz code:</label>
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
          Please enter code of game
        </span>
      </div>

      <button type='submit' className='border px-6 py-1.5 rounded-full mt-10 md:mt-0'>
        Play
      </button>
    </form>
  );
}
