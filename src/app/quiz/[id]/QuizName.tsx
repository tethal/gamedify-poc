'use client';
import { useState } from 'react';
import EditButton from '@/components/EditButton';
import TextEditForm from '@/components/TextEditForm';
import { updateQuizName } from './actions';

interface QuizNameViewProps {
  id: number;
  name: string;
}

/**
 * Display the name of a quiz, with a pencil icon to switch to edit mode.
 * @param quiz the quiz to display
 */
const QuizName = ({ id, name }: QuizNameViewProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <h2>Quiz name:</h2>
      {editing ? (
        <TextEditForm
          initialText={name}
          onClose={() => setEditing(false)}
          action={updateQuizName}
          args={{ id }}
        />
      ) : (
        <div className='flex justify-between items-center w-[20rem] py-2 px-3 text-xl'>
          <span>{name}</span>
          <EditButton onClick={() => setEditing(true)} />
        </div>
      )}
    </>
  );
};

export default QuizName;
