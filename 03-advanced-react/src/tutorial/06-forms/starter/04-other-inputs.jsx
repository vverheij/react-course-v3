import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');
  const handleShipping = (e) => {
    console.log(e.target.checked);
    // setShipping(!shipping);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    console.log(e.target.value);
    // setShipping(!shipping);
    setFramework(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={handleShipping} />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="" onChange={handleFramework} value={framework}>
            {frameworks.map((framework, index) => {
              return (
                <option key={framework} value={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
