'use client';
import { useState } from 'react';
import EditButton from '@/components/EditButton';
import DeleteButton from '@/components/DeleteButton';
import { deleteQuestion, updateQuestion } from './actions';
import TextEditForm from '@/components/TextEditForm';
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';

interface QuestionTextProps {
  quizId: number;
  id: number;
  question: string;
  expanded: boolean;
  expand: () => void;
}

const QuestionText = ({
  quizId,
  id,
  question,
  expanded,
  expand,
}: QuestionTextProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      {editing ? (
        <TextEditForm
          initialText={question}
          onClose={() => setEditing(false)}
          action={updateQuestion}
          args={{ id, quizId }}
        />
      ) : (
        <div className='flex justify-between items-center py-2 px-3 text-xl gap-2'>
          {expanded ? <MdArrowDropDown /> : <MdArrowRight />}
          <span className='grow cursor-pointer' onClick={expand}>
            {question}
          </span>
          <EditButton onClick={() => setEditing(true)} />
          <DeleteButton action={deleteQuestion} args={{ id, quizId }} />
        </div>
      )}
    </>
  );
};

export default QuestionText;
