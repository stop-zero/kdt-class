import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {

  state = {
    counter: 0,
  };
  up = () => {
    this.setState({ counter: this.state.counter + 2 });
  };
  down = () => {
    this.setState( value =>( { counter: value.counter - 1}));
  };

  render() { 
    const { counter } = this.state;
    return (
      <div>
        {/* 첫 번째 문제 */}
        <h5>{counter}</h5>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>-1</button> 
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
