'use client';

import useFormAction from '@/hooks/useFormAction';
import SaveButton from '@/components/SaveButton';
import Input from '@/components/Input';
import Saving from '@/components/Saving';
import { useState } from 'react';

interface TextAddFormProps<T> {
  label: string;
  action: (
    newValue: string,
    args: T,
  ) => Promise<{ error?: string } | undefined>;
  args: T;
}

const TextAddForm = <T extends any>({
  label,
  action,
  args,
}: TextAddFormProps<T>) => {
  const [text, setText] = useState('');
  const { error, isPending, formAction } = useFormAction(async () => {
    const result = await action(text, args);
    if (!result?.error) {
      setText('');
    }
    return result;
  });

  return (
    <div>
      <form onSubmit={formAction}>
        <div className='flex gap-2 items-center'>
          <label htmlFor='name'>{label}</label>
          <Input
            type='text'
            id='name'
            name='name'
            disabled={isPending}
            value={text}
            onChange={e => setText(e.target.value)}
          />
          {isPending ? <Saving /> : <SaveButton />}
        </div>
        <p>{error}</p>
      </form>
    </div>
  );
};
export default TextAddForm;
