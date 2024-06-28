'use client';
import { useState } from 'react';
import EditButton from '@/components/EditButton';
import DeleteButton from '@/components/DeleteButton';
import { deleteAnswer, updateAnswer } from './actions';
import TextEditForm from '@/components/TextEditForm';

interface AnswerProps {
  quizId: number;
  id: number;
  answer: string;
}

const Answer = ({ quizId, id, answer }: AnswerProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      {editing ? (
        <TextEditForm
          initialText={answer}
          onClose={() => setEditing(false)}
          action={updateAnswer}
          args={{ quizId, id }}
        />
      ) : (
        <div className='flex justify-between items-center py-2 px-3 text-xl'>
          <span className='grow'>{answer}</span>
          <EditButton onClick={() => setEditing(true)} />
          <DeleteButton action={deleteAnswer} args={{ id, quizId }} />
        </div>
      )}
    </>
  );
};

export default Answer;
