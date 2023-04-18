import './App.css';
import Food from './Food';
import Book from './Book';
import TextProps from './TextProps';

function App() {
  const name = '두부';
  const animal = '강아지';
  const num = 3 + 5 === 8 ? '정답입니다.' : '오답입니다!';
  const a = 5,
    b = 4;
  const title = 'Hello World';

  function valid() {
    console.log('콘솔 띄우기 성공!');
  }
  return (
    <>
      <div>
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <div>{num}</div>
      {a && b ? 'a가 b보다 큽니다. ' : 'error'}
      <div class="test">
        <h1>{title}</h1>
        <div class="input">
          <label for id="id">
            아이디:{' '}
          </label>
          <input type="text" id="id"></input>
          <br />
          <br />
          <label for id="pw">
            비밀번호:{' '}
          </label>
          <input type="password" id="pw"></input>
        </div>
      </div>

      <div class="box">
        <div class="red"></div>
        <div class="orange"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="navy"></div>
        <div class="purple"></div>
      </div>

      <Food food="떡볶이"></Food>
      <Food></Food>
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Book>

      <TextProps
        text="App 컴포넌트에서 넘겨준 text props입니다. "
        valid={valid}
      />
    </>
  );
}

export default App;
