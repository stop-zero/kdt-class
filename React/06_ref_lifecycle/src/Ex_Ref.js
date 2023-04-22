// Ref 실습
import { useState } from 'react';
import { useRef } from 'react';

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(''); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(''); // 제목 input state
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: '민수',
      title: '안뇽',
    },
    {
      id: 2,
      writer: '지민',
      title: '하이하이',
    },
    {
      id: 3,
      writer: '희수',
      title: '멋쟁이',
    },
  ]); // 댓글 목록 배열 state

  // Ref 객체 선언
  const inputWriteRef = useRef();
  const inputTitleRef = useRef();

  // input 빈값 여부 검사
  const checkInputValue = () => {
    // [실습] writer input, title input 중에서 빈값이 있으면 input focusing
    //강사님 코드
    if (inputWriter.trim().length === 0) {
      inputWriteRef.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      inputTitleRef.current.focus();
      return false;
    }
    return true;
  };

  const addComment = () => {
    // [실습] writer input, title input 중에서 빈값이 있으면 input focusing

    //내 코드
    // if (!inputWriter.trim().length && !inputTitle.trim().length) {
    //   inputWriteRef.current.focus();
    //   return;
    // } else if (!inputWriter.trim().length) {
    //   inputWriteRef.current.focus();
    //   return;
    // } else if (!inputTitle.trim().length) {
    //   inputTitleRef.current.focus();
    //   return;
    // }

    //!false
    if(!checkInputValue()) return;
    
    console.log('추가 버튼 클릭!');
    // TODO: comment state에 원소 추가

    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    }; // comment state 배열에 새로 추가할 요소

    // ver2. spread(...) 연산자
    const newComment = [...comment, newData];
    setComment(newComment);

    // TODO: input 초기화
    setInputWriter('');
    setInputTitle('');
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          ref={inputWriteRef}
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
          autoFocus
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          ref={inputTitleRef}
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((cmt) => {
            // cmt => { id:n, writer: xxx, title: xxx }
            return (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;
