'use client';
import { useState } from 'react';
import EditButton from '@/components/EditButton';
import TextEditForm from '@/components/TextEditForm';
import { updateQuizName } from './actions';
import useTranslation from '@/hooks/useTranslation';

interface QuizNameViewProps {
  id: number;
  name: string;
}

/**
 * Display the name of a quiz, with a pencil icon to switch to edit mode.
 * @param quiz the quiz to display
 */
const QuizName = ({ id, name }: QuizNameViewProps) => {
  const { translate } = useTranslation();
  const [editing, setEditing] = useState(false);
  return (
    <>
      <h2 className='text-xl'>{translate('quiz_name')}:</h2>
      {editing ? (
        <TextEditForm
          initialText={name}
          onClose={() => setEditing(false)}
          action={updateQuizName}
          args={{ id }}
        />
      ) : (
        <div className='flex justify-between items-center w-[min(30rem,98%)] py-2 px-3 text-2xl font-bold'>
          <span>{name}</span>
          <EditButton onClick={() => setEditing(true)} />
        </div>
      )}
    </>
  );
};

export default QuizName;
