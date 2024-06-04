'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { isCodeValid } from '@/lib/util';
import Input from '@/components/Input';

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
    >
      <label htmlFor='code'>Quiz code:</label>
      <Input
        type='number'
        id='code'
        name='code'
        value={code}
        onChange={e => {
          setCode(e.target.value);
        }}
      />
      <button type='submit'>Play</button>
    </form>
  );
}
