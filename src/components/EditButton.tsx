/**
 * Edit button component, used to switch to edit mode.
 * TODO: display a pencil icon instead of text
 * @param onClick - callback when the button is clicked.
 */
const EditButton = ({ onClick }: { onClick: () => void }) => (
  <button className='border' onClick={onClick}>
    Edit name
  </button>
);

export default EditButton;
