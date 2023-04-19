import React, { useState } from 'react';
import FunctionComponent from './functionComponent';

export default function Color() {
  const [text, setText] = useState('사라져라');
  const [isVisible, setIsVisible] = useState(true);
  //   const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    isVisible === false ? setText('사라져라') : setText('보여라');
    isVisible === false ? setIsVisible(true) : setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
          <div>
          <h1>안녕하세요</h1>
        </div>
      )}
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
