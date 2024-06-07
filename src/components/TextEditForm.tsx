'use client';

import { useState } from 'react';
import SaveButton from '@/components/SaveButton';
import CancelButton from '@/components/CancelButton';
import Input from '@/components/Input';
import Saving from '@/components/Saving';
import useFormAction from '@/hooks/useFormAction';

interface TextEditFormProps<T> {
  initialText: string;
  type?: 'text' | 'number';
  onClose: () => void;
  action: (
    newValue: string,
    args: T,
  ) => Promise<{ error?: string } | undefined>;
  args: T;
}

const TextEditForm = <T extends any>({
  initialText,
  type,
  onClose,
  action,
  args,
}: TextEditFormProps<T>) => {
  const [text, setText] = useState(initialText);
  const { error, isPending, formAction } = useFormAction(async () => {
    const result = await action(text, args);
    if (!result?.error) {
      onClose();
    }
    return result;
  });

  return (
    <form className='flex gap-2 relative' onSubmit={formAction}>
      <Input
        className={'text-black p-1.5 rounded-xl'}
        type={type || 'text'}
        name='name'
        value={text}
        disabled={isPending}
        onChange={e => setText(e.target.value)}
      />
      {isPending ? (
        <Saving />
      ) : (
        <>
          <SaveButton />
          <CancelButton onClick={onClose} />
        </>
      )}
      <p>{error}</p>
    </form>
  );
};

export default TextEditForm;
