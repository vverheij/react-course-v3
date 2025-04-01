import { useState } from 'react';

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(completed);
  const handleRemove = (id) => {
    removeItem(id);
  };
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        // checked={isChecked}
        checked={completed}
        // onChange={(e) => setIsChecked(!isChecked)}
        onChange={(e) => editItem(id)}
      />
      {/* <p style={{ textDecoration: isChecked && 'line-through', textTransform: 'capitalize' }}>{name}</p> */}
      <p style={{ textDecoration: completed && 'line-through', textTransform: 'capitalize' }}>{name}</p>
      <button className="btn remove-btn" type="button" onClick={() => handleRemove(id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
