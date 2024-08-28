'use client';

import { MdOutlineDelete } from 'react-icons/md';
import IconButton from '@/components/IconButton';

interface DeleteButtonProps<T> {
  action: (args: T) => Promise<any>;
  args: T;
}


// TODO confirm dialog
const DeleteButton = <T extends any>({
  action,
  args,
}: DeleteButtonProps<T>) => (
  <IconButton
    color='red'
    type='button'
    onDoubleClick={async () => await action(args)}
  >
    <MdOutlineDelete />
  </IconButton>
);
export default DeleteButton;
