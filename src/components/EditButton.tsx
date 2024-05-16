/**
 * Edit button component, used to switch to edit mode.
 * TODO: display a pencil icon instead of text
 * @param onClick - callback when the button is clicked.
 */

import { MdModeEdit } from 'react-icons/md';
const EditButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className='border ratio-square p-2 rounded-full hover:text-emerald-900 hover:shadow-[0px_0px_10px_2px_#064E3B] hover:border-emerald-950 '
    onClick={onClick}
  >
    <MdModeEdit />
  </button>
);

export default EditButton;
