import { useState } from 'react';

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(() => !alert);
  };
  return (
    <div>
      <h1>Toggle challenge</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Toggle
      </button>
      {alert && <Alert />}
    </div>
  );
};

const Alert = ({ alert }) => {
  return <div className="alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;
