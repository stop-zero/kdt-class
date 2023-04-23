import { useState } from 'react';

function SyntheticEvent2() {
  const [text, setText] = useState('');

  function printInputValue(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }

  return (
    <div>
        {/* onChange 사용 */}
      <input type="text" placeholder="아무거나 입력!" onChange={printInputValue}/>
      <h3>{text}</h3>
    </div>
  );
}

export default SyntheticEvent2;
