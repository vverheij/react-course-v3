import { useState } from 'react';
const Person = ({ id, image, name, age, remove }) => {
  return (
    <article className="person" key={id}>
      <img src={image} alt={name} className="img" />
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <button type="button" onClick={() => remove(id)} className="btn">
          Remove
        </button>
      </div>
    </article>
  );
};
export default Person;
