const { networkInterfaces } = require('os');

// 배열 구조 분해
const lists = ['apple', 'grape'];
// console.log(lists[0]);
[item1, item2, item3 = 'peach'] = lists;
// console.log('item1:', item1);
// console.log('item2:', item2);
// console.log('item3:', item3);

//변수 교체
let x = 1,
  y = 2;
// console.log(x, y); //(1, 2)
[x, y] = [y, x];
// console.log(x, y); //(2, 1)

//객제 구조 분해
const obj = {
  key1: 'one',
  key2: 'two',
};
// console.log(obj.key1);  //one
const { key1: newkey, key2, key3 = 'three' } = obj;
// console.log("key1: ", key1);    //one
// console.log("key2 : ", key2);   //two
// console.log("newkey:", newkey);     //one
// console.log(key3)    //three

// 대입 연산자를 기준으로 좌측과 우측의 변수가 같아야 한다.
const { a, b } = { a: 10, b: 10 };
// const {a, c} = {a: 10, b:10};
// console.log("a", a); //10
// console.log("c", c); //undefined
// console.log("b", b); //10

//spreed 연산자
//배열이 있을 때 ... 로 배열값을 쉽게 가져옴
//함수 호출에 점 (...)을 사용하는 경우 spread 연산자
const a1 = [1, 2, 3, 4, 5];
// console.log(...a1); //1 2 3 4 5

//rest 파라미터 : 남은 인수들을 묶어서 배열로 반환
//함수 매개 변수에 점(...)을 사용하는 경우 rest 매개 변수
// 실무에서 많이 사용하지는 않음 , object 값을 묶어서 반환
// 변수명 rest 라고 안 써도 되지만 rest 가 암묵적 룰~
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data;
// console.log("c: ", c) //30
// console.log("d: ", d)//40
// console.log("rest : ", rest) //rest :  { e: 50, f: 60 }

// 배열 분해 할당
const newArr = ['one', 'two', 'three'];
const [one, two, three, four = 'four'] = newArr;
// console.log(one, two, three, four) //one two three four

//swqp
let newA = 10,
  newB = 20;
// console.log(newA, newB);    //10 20
[newA, newB] = [newB, newA];
// console.log(newA, newB);    //20 10

// 객제 분해 할당
const newObj = {
  one: 'one',
  two: 'two',
  three: 'three',
};
// console.log(newObj.one); //one
// console.log(newObj.two); //two
// console.log(newObj.three); //three

const { one: newOne, two: newTwo, three: newThree } = newObj;
// console.log(newOne);    //one
// console.log(newTwo);    //two
// console.log(newThree);  //

//spread 연산자
// -> 객체의 값을 펼치는 연산자
const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const t3 = [...t1, ...t2];
// console.log(t3)//[ 1, 2, 3, 4, 5, 6 ]

const cookie = {
  base: 'cookie',
  madeIn: 'korea',
};
const chocochipCookie = {
  ...cookie,
  toping: 'chocochip',
};
console.log(chocochipCookie); //{ base: 'cookie', madeIn: 'korea', toping: 'chocochip' }

const noTopingCookies = ['촉촉한쿠키', '안촉촉한 쿠키'];
const topingCookies = ['바나나쿠키', '블루베리쿠키', '딸기쿠키'];
const allCookies = [...noTopingCookies, '초코칩쿠키', ...topingCookies];
console.log(allCookies) //[ '촉촉한쿠키', '안촉촉한 쿠키', '초코칩쿠키', '바나나쿠키', '블루베리쿠키', '딸기쿠키' ]


//일부 반환 값 무시하기
function f() {
  return [1, 2, 3];
}

const [num1, , num2] = f();
console.log(num1); // 1
console.log(num2); // 3

const [fruit1, ...fruit2] = ['apple','banana', 'peach'];
console.log(fruit1); // apple
console.log(fruit2); // [ 'banana', 'peach' ]



