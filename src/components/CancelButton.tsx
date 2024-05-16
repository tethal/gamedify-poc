/**
 * Cancel button component, used to discard changes and switch back to view mode.
 * @param disabled - whether the button is disabled, e.g. while saving
 * @param onClick - callback when the button is clicked
 */
import { MdOutlineCancel } from 'react-icons/md';
const CancelButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    className='disabled:text-gray-800 ratio-square p-2 rounded-full hover:text-red-600 hover:shadow-[0px_0px_10px_2px_#DC2626] hover:border-red-600'
    type='button'
    disabled={disabled}
    onClick={onClick}
  >
    <MdOutlineCancel />
  </button>
);

export default CancelButton;
