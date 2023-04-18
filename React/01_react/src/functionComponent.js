import PropTypes from 'prop-types';

function FunctionComponent({ name, age }) {
  //   console.log(props);
  //   props = { name: '둘리', age: '400' };

  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: 'jiyoung',
  age: '11',
};

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

// const FunctionComponent = () =>{

// }

export default FunctionComponent;
