'use client';

import { createQuiz } from './actions';
import useFormAction from '@/hooks/useFormAction';
import SaveButton from '@/components/SaveButton';
import Input from '@/components/Input';
import Saving from '@/components/Saving';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateQuizForm() {
  const [name, setName] = useState('');
  const router = useRouter();
  const { error, isPending, formAction } = useFormAction(async () => {
    const quiz = await createQuiz(name);
    router.push(`/quiz/${quiz.id}`);
  });

  return (
    <div>
      <h1 className='pb-4 text-2xl'>Create a new quiz</h1>
      <form onSubmit={formAction}>
        <div className='flex gap-2 items-center'>
          <label htmlFor='name'>Quiz name:</label>
          <Input
            type='text'
            id='name'
            name='name'
            disabled={isPending}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {isPending ? <Saving /> : <SaveButton />}
        </div>
        <p>{error}</p>
      </form>
    </div>
  );
}
