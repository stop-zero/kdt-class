import PropTypes from 'prop-types';
import { useState } from 'react';

function FunctionComponent() {
  
  const [counter, setcounter] = useState(0);
  console.log(counter);
  const InClick = () => {
    setcounter(counter + 1);
  };
  const DeClick = () => {
    setcounter(counter - 2);
  };

  return (
    <div> 

      <h5>{counter}</h5>
      <button onClick={InClick}>Increase</button>
      <button onClick={DeClick}>Decrease</button>
    </div>
  );
}

export default FunctionComponent;
