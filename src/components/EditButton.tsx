import { MdModeEdit } from 'react-icons/md';
import IconButton from '@/components/IconButton';

const EditButton = ({ onClick }: { onClick?: () => void }) => (
  <IconButton color='cyan' onClick={onClick}>
    <MdModeEdit />
  </IconButton>
);

export default EditButton;
