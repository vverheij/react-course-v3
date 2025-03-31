import { people } from './../../../data';
import Person from './Person.jsx';
const List = () => {
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};
export default List;
