import Person from './Person';
import { data } from '../../../../data';
import { useState } from 'react';
const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
