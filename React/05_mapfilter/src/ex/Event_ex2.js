import { useState } from 'react';

const Event_ex2 = () => {
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: '민수', title: '안녕' },
    { id: 2, name: '지민', title: '방가방가' },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');

  const addInfo = () => {
    if (inputName.trim().length === 0 || inputTitle.trim().length === 0) return;

    const newUserInfo = userInfo.concat({
      id: userInfo.length + 1,
      name: inputName,
      title: inputTitle,
    });

    setUserInfo(newUserInfo);
  };
  const deleteUser = (id) => {
    const newUserInfo = userInfo.filter((obj) => obj.id !== id);
    setUserInfo(newUserInfo);
  };
  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') addInfo();
  };

  return (
    <>
      <label>작성자: </label>
      <input
        type="text"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        c
      />
      <label> 제목: </label>
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addInfo}>작성</button>

      <br />
      <br />
      <select name="작성자">
        {
          <option value="none" selected disabled hidden>
            작성자
          </option>
        }
        {userInfo.map((obj) => (
          <option key={obj.id}>{obj.name}</option>
        ))}
      </select>
      <input type="text" />
      <button>검색</button>
      <br />
      <br />
      <table border={1} style={{ width: '300px' }}>
        <thead>
          <tr >
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tbody>
          {userInfo.map((obj) => (
            <tr id={obj.id}>
              <td>{obj.id} </td>
              <td>{obj.title}</td>
              <td>{obj.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Event_ex2;
