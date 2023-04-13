// js object에 key, value 추가하는 방법
// const nickObj = {};

// const socket = { id: 'asdfasdf123412343541' };

// nickObj.hello = '안녕'; // 방법1
// nickObj['apple'] = '사과'; // 방법2
// nickObj[socket.id] = 'sean'

// console.log(nickObj)

//
// value 값이 겹치지 않게
// const nickObj = { hello: '안녕', apple: '사과' };
// const nick1 = '안녕';
// const nick2 = '사과';
// const nick3 = '오렌지';

// // Object.values : obj의 value만 뽑아서 배열로
// console.log(Object.values(nickObj));
// console.log(Object.values(nickObj).indexOf(nick1));
// console.log(Object.values(nickObj).indexOf(nick2));
// console.log(Object.values(nickObj).indexOf(nick3));

//
const nickObj = { hello: '안녕', apple: '사과' };

// for in 반복문
for (let key in nickObj) {
  console.log(key, nickObj[key]);
}
