'use client';

import { useState } from 'react';
import SaveButton from '@/components/SaveButton';
import CancelButton from '@/components/CancelButton';
import Input from '@/components/Input';
import Saving from '@/components/Saving';
import useFormAction from '@/hooks/useFormAction';
import useTranslation from '@/hooks/useTranslation';

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
  const { translate } = useTranslation();
  const [text, setText] = useState(initialText);
  const { error, isPending, formAction } = useFormAction(async () => {
    const result = await action(text, args);
    if (!result?.error) {
      onClose();
    }
    return result;
  });

  return (
    <form className='grid gap-2  relative' onSubmit={formAction}>
      <Input
        type={type || 'text'}
        name='name'
        value={text}
        disabled={isPending}
        onChange={e => setText(e.target.value)}
      />
      {isPending ? (
        <Saving />
      ) : (
        <div className='place-self-end grid grid-cols-2 gap-2'>
          <SaveButton />
          <CancelButton onClick={onClose} />
        </div>
      )}
      <p>{translate(error)}</p>
    </form>
  );
};

export default TextEditForm;
