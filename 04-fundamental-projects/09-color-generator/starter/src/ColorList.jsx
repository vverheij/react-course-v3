import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
        // <div>{item._values.type}</div>;
      })}
    </section>
  );
};
export default ColorList;
