import React, { useState } from 'react';
import FunctionComponent from './functionComponent';

// 내가 푼 거
// export default function Color() {
//   const [text, setText] = useState('검은색 글씨');
//   const [color, setColor] = useState('black');

//   const red = () => {
//     setColor('red');
//     setText('빨간색 글씨');
//   };

//   const blue = () => {
//     setColor('blue');
//     setText('파란색 글씨');
//   };

//   return (
//     <div style={{ color: color }}>
//       <h1>{text}</h1>
//       <button onClick={red}>빨간색 글씨</button>
//       <button onClick={blue}>파란색 글씨</button>
//     </div>
//   );
// }


// 정답 코드 
// const Prob1 = () => {
//   const [color, setColor] = useState('black');
//   const [text, setText] = useState('검정색 글씨');

//   const onclickRed = () => {
//     setText('빨간색 글씨');
//     setColor('red');
//   };
  
//   const onclickBlue = () => {
//     setText('파란색 글씨');
//     setColor('blue');
//   };

//   return (
//     <>
//       <h1 style={{color : color}}>{text}</h1>
//       <button onClick={onclickRed}>빨간색</button>
//       <button onClick={onclickBlue}>파란색</button>
//     </>
//   );
// };

// state 변수 1개로 풀어보기
const Prob1 = () => {
  const [state, setState] = useState({
    color: 'black',
    text: '검정색 글씨',
  });

  const onClickRed = () => {
    setState({
      color: 'red',
      text: '빨간색 글씨',
    });
  };

  const onClickBlue = () => {
    setState({
      color: 'blue',
      text: '파란색 글씨',
    });
  };

  return (
    <>
      <h1 style={{ color: state.color }}>{state.text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
};


export default Prob1;
