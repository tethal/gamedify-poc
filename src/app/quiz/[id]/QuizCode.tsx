'use client';
import { useState } from 'react';
import EditButton from '@/components/EditButton';
import DeleteButton from '@/components/DeleteButton';
import { clearQuizCode, updateQuizCode } from './actions';
import TextEditForm from '@/components/TextEditForm';

interface QuizCodeViewProps {
  id: number;
  code: string | null;
}

/**
 * Display the code of a quiz, with a pencil icon to switch to edit mode.
 */
const QuizCode = ({ id, code }: QuizCodeViewProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <h2>Code:</h2>
      {editing ? (
        <TextEditForm
          initialText={code || ''}
          type='number'
          onClose={() => setEditing(false)}
          action={updateQuizCode}
          args={{ id }}
        />
      ) : (
        <div className='flex items-center w-[20rem] py-2 px-3 text-xl'>
          <span className='grow'>{code}</span>
          <EditButton onClick={() => setEditing(true)} />
          {code !== null && (
            <DeleteButton action={clearQuizCode} args={{ id }} />
          )}
        </div>
      )}
    </>
  );
};

export default QuizCode;
