import { MdClose } from 'react-icons/md';
import IconButton from '@/components/IconButton';

const CancelButton = ({ onClick }: { onClick?: () => void }) => (
  <IconButton color='red' onClick={onClick}>
    <MdClose />
  </IconButton>
);

export default CancelButton;
