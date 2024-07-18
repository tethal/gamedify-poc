'use client';
import { useState } from 'react';
import QSetNameForm from '@/components/qset/QSetNameForm';
import EditButton from '@/components/EditButton';

interface QSetNameViewProps {
  questionSet: { id: number; name: string };
}

/**
 * Display the name of a question set, with an pencil icon to switch to edit mode.
 * @param questionSet the question set to display
 */
const QSetNameView = ({ questionSet }: QSetNameViewProps) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(questionSet.name);
  if (editing) {
    return (
      <QSetNameForm
        id={questionSet.id}
        initialName={name}
        onClose={newName => {
          setName(newName);
          setEditing(false);
        }}
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

export default QSetNameView;
