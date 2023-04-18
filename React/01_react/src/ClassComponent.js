import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
  //클래스형 컴포넌트 render() 함수 필수
  render() {
    console.log(this.props);
    //this.props = { name: "홍길동", age: "13"}
    const { name, age } = this.props;
    const { text } = this.props; //객체 구조 분해 할당
    
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
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