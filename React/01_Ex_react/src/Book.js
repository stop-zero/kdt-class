import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Book({ title, author, price, type }) {
  return (
    <div class="book">
      <h2>이번주 베스트셀러</h2>
      <img src={'book.png'} alt="book"></img>
      <div>{title}</div>
      <div>저자: {author}</div>
      <div>판매가: {price}</div>
      <div>구분: {type}</div>
    </div>
  );
}

export default Book;
