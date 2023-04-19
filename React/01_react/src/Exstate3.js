import React, { useState } from 'react'
import FunctionComponent from './functionComponent';

export default function Color() {
    const [text, setText] = useState('검은색 글씨');
    const [color, setColor] = useState('black');

    const red = () => {
    setColor('red');
     setText('빨간색 글씨')
      };

    const blue = () => {
    setColor('blue'); 
    setText('파란색 글씨')
      };
   
    return (
        <div style={{ color: color }}>
            <h1>{text}</h1>
            <button onClick={red}>빨간색 글씨</button>
            <button onClick={blue}>파란색 글씨</button>
        </div>
    )
}

