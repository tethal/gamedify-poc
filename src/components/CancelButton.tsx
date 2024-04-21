/**
 * Cancel button component, used to discard changes and switch back to view mode.
 * @param disabled - whether the button is disabled, e.g. while saving
 * @param onClick - callback when the button is clicked
 */
const CancelButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    className='disabled:text-gray-800'
    type='button'
    disabled={disabled}
    onClick={onClick}
  >
    Cancel
  </button>
);

export default CancelButton;
