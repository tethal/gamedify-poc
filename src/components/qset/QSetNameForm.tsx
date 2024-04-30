import { useState, useTransition } from 'react';
import { updateQSetName } from '@/components/qset/actions';
import SaveButton from '@/components/SaveButton';
import CancelButton from '@/components/CancelButton';

interface QSetNameFormProps {
  id: number;
  initialName: string;
  onClose: (newName: string) => void;
}

/**
 * A form for editing the name of a question set.
 * @param id the id of the question set
 * @param initialName the initial name of the question set
 * @param onClose callback when the form is closed, receives the new name as an argument
 */
const QSetNameForm = ({ id, initialName, onClose }: QSetNameFormProps) => {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const save = () => {
    startTransition(async () => {
      try {
        await updateQSetName(id, name);
        setError('');
        onClose(name);
      } catch (e) {
        setError('unable to save');
      }
    });
  };
  return (
    <form className='flex gap-2' action={save}>
      <input
        className={'text-black'}
        type='text'
        name='name'
        disabled={isPending}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <SaveButton disabled={isPending} />
      <CancelButton disabled={isPending} onClick={() => onClose(initialName)} />
      <span>{isPending ? 'saving...' : error}</span>
    </form>
  );
};

export default QSetNameForm;
