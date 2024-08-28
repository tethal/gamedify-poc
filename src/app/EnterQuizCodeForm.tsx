'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { isCodeValid } from '@/lib/util';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { FaStarOfLife } from 'react-icons/fa';
import useTranslation from '@/hooks/useTranslation';

export default function EnterQuizCodeForm() {
  const [code, setCode] = useState('');
  const router = useRouter();
  const { translate } = useTranslation();
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
        {translate('quiz_code')}:
      </label>
      <div className='relative mt-2 my-2 mb-10 md:mb-2'>
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
          {translate('please_enter_quiz_code')}
        </span>
      </div>

      <Button type='submit'>{translate('play')}</Button>
    </form>
  );
}
