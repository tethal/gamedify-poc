/**
 * Save button component, used to submit the form to save the changes and switch back to view mode.
 * @param disabled - whether the button is disabled, e.g. while the form is submitting
 */
const SaveButton = ({ disabled }: { disabled: boolean }) => (
  <button className='disabled:text-gray-800' type='submit' disabled={disabled}>
    Save
  </button>
);

export default SaveButton;
