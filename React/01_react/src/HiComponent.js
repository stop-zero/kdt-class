import { useState } from 'react';

function HiComponent() {
  const [message, setMessage] = useState('안녕하세요');
  const [bool, setBool] = useState(false);

  const inClick = () => {
    setMessage('입장하셨습니다. ');
    console.log('in');
  };

  const outClick = () => {
    setMessage('퇴장하셨습니다. ');
    console.log('out');
  };

  const onClick = () => {
    setBool(true);
  };

  return (
    <>
      {bool && (
        <>
          <h1>{message}</h1>
          <button onClick={inClick}>입장</button>
          <button onClick={outClick}>퇴장</button>
        </>
      )}
      <button onClick={onClick}>로그인 성공</button>
    </>
  );
}

export default HiComponent;
