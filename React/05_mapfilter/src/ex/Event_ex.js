import { useState } from 'react';

//ver2
const Event_ex = () => {
  // name state : 리스트에 대한 상태
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  // inputName state : input 에 넣는 값에 대한 상태
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addName = () => {
    // 공백 x
    if (!inputName.trim().length) {
      return;
    }

    //concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newName = name.concat({
      n: name.length + 1,
      outName: `${inputName} : ${inputEmail}`,
    });
    setName(newName); //리스트 상태 업데이트
    setInputName('');

    //email
    if (!inputEmail.trim().length) {
        return;
      }
  
      const newEmail = email.concat({
        email: email.length + 1,
        outEmail: inputEmail,
      });
      setEmail(newEmail); 
      setInputEmail('');

  };

  const deleteName = (n) => {
    const newNames = name.filter((obj) => obj.n !== n);
    setName(newNames);
  };
  
  // Enter 입력
  const activeEnter = (e) => {
    if (e.key === 'Enter') addName();
  };

  return (
    <>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={(e) => activeEnter(e)} placeholder='이름'
      />
      <input
        type="email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)} placeholder='이메일'
      />
      <button onClick={addName}>등록</button>
      <ol>
        {name.map((obj) => (
          <h3 key={obj.n} onDoubleClick={() => deleteName(obj.n)}>
            {obj.outName}
          </h3>
        ))}
      </ol>
    </>
  );
};

export default Event_ex;
