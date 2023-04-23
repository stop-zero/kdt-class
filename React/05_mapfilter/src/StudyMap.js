import { useState } from 'react';

//ver2
const StudyMap = () => {
  // text state : 리스트에 대한 상태
  const [text, setText] = useState([]);

  // inputText state : input 에 넣는 값에 대한 상태
  const [inputText, setInputText] = useState('');

  const addText = () => {
    // 공백 입력 x
    // trim() 메소드로 공백 제거 하고 
    // 글자 수가 0인 경우 함수 종료.
    if (!inputText.trim().length) {
      return;
    }

    // concat() : 메서드는 인자로 주어진 값을 기존 배열에 합쳐서 새 배열로 반환
    const newText = text.concat({
      id: text.length + 1,
      text: inputText,
    });
    setText(newText);
    setInputText(''); // input 란 초기화
  };

  // filter 적용
  // deleteText : 
  // id 매개변수와 일치하지 않는 id 속성을 가진 text 배열의 요소를 삭제
  const deleteText = (id) => {
    const newText = text.filter((obj) => obj.id !== id);
    setText(newText);
  };

  // Enter 입력
  const activeEnter = (e) => {
    if (e.key == 'Enter') addText();
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addText}>추가</button>
      <ol>
        {text.map((value) => (
          <h5 key={value.id} onDoubleClick={() => deleteText(value.id)}>
            {value.text}
          </h5>
        ))}
      </ol>
    </>
  );
};

export default StudyMap;
