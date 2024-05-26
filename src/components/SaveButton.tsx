/**
 * Save button component, used to submit the form to save the changes and switch back to view mode.
 * @param disabled - whether the button is disabled, e.g. while the form is submitting
 */
import { MdOutlineSaveAlt } from 'react-icons/md';

const SaveButton = ({ disabled }: { disabled: boolean }) => (
  <button
    className='disabled:text-gray-800 ratio-square p-2 rounded-full hover:text-green-600 hover:shadow-[0px_0px_10px_2px_#16A34A] hover:border-green-600'
    type='submit'
    disabled={disabled}
  >
    <MdOutlineSaveAlt />
  </button>
);

export default SaveButton;
