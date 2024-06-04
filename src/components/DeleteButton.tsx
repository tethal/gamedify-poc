'use client';

import { MdOutlineDelete } from 'react-icons/md';
import IconButton from '@/components/IconButton';

interface DeleteButtonProps {
  action: (id: number) => void;
  idArg: number;
}

// TODO confirm dialog
const DeleteButton = ({ action, idArg }: DeleteButtonProps) => (
  <IconButton color='red' type='button' onClick={() => action(idArg)}>
    <MdOutlineDelete />
  </IconButton>
);

export default DeleteButton;
