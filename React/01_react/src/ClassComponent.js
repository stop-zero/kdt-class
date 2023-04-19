import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
  //클래스형 컴포넌트 render() 함수 필수

  //state 오브젝트
  state = {
    counter: 0,
  };
  up = (name) => {
    console.log(name);
    // this.counter =this.counter+1;
    this.setState({ counter: this.state.counter + 1 });
  };
  down = () => {
    this.setState( value =>( { counter: value.counter - 1}));
  };

  render() {
    console.log(this.props);
    //this.props = { name: "홍길동", age: "13"}
    const { name, age } = this.props;
    const { text } = this.props; //객체 구조 분해 할당
    const { counter } = this.state;
 
    return (
      <div>
        {/* <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
        <h5>{counter}</h5>
        <button onClick={() => this.up('abc')}>숫자 Up!</button>
        <button onClick={this.down}>숫자 Down!</button> */}
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: 'abc',
  age: '1',
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
