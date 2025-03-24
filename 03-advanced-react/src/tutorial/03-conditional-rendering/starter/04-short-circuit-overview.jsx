import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Susan');

  return (
    <div>
      {/* <!--Hello world--> */}
      <h4>Falsy OR: {text || 'hello world'}</h4> {/* Hello world */}
      <h4>Falsy AND: {text && 'hello world'}</h4> {/* '' */}
      <h4>Truthy OR: {name || 'hello world'}</h4> {/* Susan */}
      <h4>Truthy AND: {name && 'hello world'}</h4> {/*} Hello world */}
    </div>
  );
};
export default ShortCircuitOverview;
