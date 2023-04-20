import React, { useState } from 'react';
import FunctionComponent from './functionComponent';

//내가 푼 코드
// export default function Color() {
//   const [text, setText] = useState('사라져라');
//   const [isVisible, setIsVisible] = useState(true);
//   //   const [isVisible, setIsVisible] = useState(false);

//   const onClick = () => {
//     isVisible === false ? setText('사라져라') : setText('보여라');
//     isVisible === false ? setIsVisible(true) : setIsVisible(false);
//   };

//   return (
//     <div>
//       {isVisible && (
//           <div>
//           <h1>안녕하세요</h1>
//         </div>
//       )}
//       <button onClick={onClick}>{text}</button>
//     </div>
//   );
// }

//정답 코드
const Prob2 = () => {
  const [visible, setVisible] = useState(true);

const toggle = () => {
  setVisible(!visible);
  //!true => flase
  //!false => true


  return (
    <>
      <button onClick={toggle}>{visible ? ' 사라져라!' : '보여라!'}</button>
      <h1>{visible && '안녕하세요'}</h1>
    </>
  );
};
}

export default Prob2;
