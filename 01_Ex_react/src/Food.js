import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Food(props) {
  return (
    <div>
      내가 좋아하는 음식 :<span>{props.food}</span>
    </div>
  );
}

Food.defaultProps = {
  food: '먹는 게 제일 좋아',
};

export default Food;
