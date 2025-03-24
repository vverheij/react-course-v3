import Person from './Person';

const List = ({ people, remove }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} remove={remove} />;
      })}
    </section>
  );
};
export default List;
