'use client';
import { useState } from 'react';
import QuizNameForm from './QuizNameForm';
import EditButton from '@/components/EditButton';

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
  if (editing) {
    return (
      <QuizNameForm
        id={id}
        initialName={name}
        onClose={() => setEditing(false)}
      />
    );
  }
  return (
    <div className='flex justify-between items-center w-[20rem] py-2 px-3 text-xl'>
      <span>{name}</span>
      <EditButton onClick={() => setEditing(true)} />
    </div>
  );
};

export default QuizName;
