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
    <form className='flex gap-2 relative' action={save}>
      <input
        className={'text-black p-1.5 rounded-xl'}
        type='text'
        name='name'
        disabled={isPending}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <SaveButton disabled={isPending} />
      <CancelButton disabled={isPending} onClick={() => onClose(initialName)} />
      {isPending && <span className='absolute bg-zinc-950 w-full p-4 top-0 left-0 text-center text-xl'>{isPending ? 'saving...' : error}</span>}
    </form>
  );
};

export default QSetNameForm;
