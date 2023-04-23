import { useState } from 'react';

function FunctionComponent2() {
  const [counter, setCounter] = useState(10);

  const down = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h5>{counter}</h5>
      <button onClick={down}>-1</button>
    </>
  );
}

export default FunctionComponent2;
