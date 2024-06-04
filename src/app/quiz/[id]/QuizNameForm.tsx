'use client';

import { useState, useTransition } from 'react';
import { updateQuizName } from './actions';
import SaveButton from '@/components/SaveButton';
import CancelButton from '@/components/CancelButton';
import Input from '@/components/Input';
import Saving from '@/components/Saving';
import useFormAction from '@/hooks/useFormAction';

interface QuizNameFormProps {
  id: number;
  initialName: string;
  onClose: () => void;
}

/**
 * A form for editing the name of a quiz.
 * @param id the id of the quiz
 * @param initialName the initial name of the quiz
 * @param onClose callback when the form is closed
 */
const QuizNameForm = ({ id, initialName, onClose }: QuizNameFormProps) => {
  const [name, setName] = useState(initialName);
  const { error, isPending, formAction } = useFormAction(async () => {
    await updateQuizName(id, name);
    onClose();
  });

  return (
    <form className='flex gap-2 relative' onSubmit={formAction}>
      <Input
        className={'text-black p-1.5 rounded-xl'}
        type='text'
        name='name'
        value={name}
        disabled={isPending}
        onChange={e => setName(e.target.value)}
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

export default QuizNameForm;
