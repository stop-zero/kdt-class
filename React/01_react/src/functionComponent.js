import PropTypes from 'prop-types';
import { useState } from 'react';

function FunctionComponent() {
  // const list = 'abc;'
  const [counter, setcounter] = useState(0);
  console.log(counter);
  //   console.log(props);
  //   props = { name: '둘리', age: '400' };
  const onClick = () => {
    setcounter(counter + 1);
    console.log('Click');
  };

  return (
    <div> 
      <h1>Hello World, Function Component</h1>
      <h5>{counter}</h5>
      <button onClick={onClick}>숫자 Up!</button><br/>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
    </div>
  );
}

// FunctionComponent.defaultProps = {
//   name: 'jiyoung',
//   age: '11',
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// const FunctionComponent = () =>{

// }

export default FunctionComponent;
