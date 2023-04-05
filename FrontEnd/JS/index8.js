/* 문자열 관련 함수 + 속성(length) */
/* 
    - toUppercase(), toLowerCase()
    - trim()
    - indexOf()
    - slice()
    - replace(), replaceAll()
    - repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "     Strawberry Moon       ";
//문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

//Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
// 공백 포함 글자수
console.log(str1.length);
console.log(str2.length);
//매개변수 없는 함수
//대문자/소문자
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
//양쪽 공백 없애는 거
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "   hello world!!   ";
console.log(msg2.trim().toUpperCase());

//매개변수 있는 함수
let fruit = "applemango";
console.log(fruit.indexOf("a")); //문자열 인덱스 번호 반환 , 0
console.log(fruit.indexOf("apple")); //문자가 시작하는 인덱스 반환, 0
console.log(fruit.indexOf("x")); //없는 문자면 -1 반환

console.log(fruit.charAt(3)); //1

console.log(fruit.slice(5)); //아무것도 없으면 전체 매개변수 출력 , 번호부터 끝까지 추출
console.log(fruit.slice(3, 6)); //두개면 3~6까지 인덱스 추출, lem
console.log(fruit.slice(-3)); //음수이면 뒤에서부터, ngo

//console.log(fruit); //함수를 많이써도 문자열은 변하지 않음

let msg3 = "Wow! It is so amazing!!";
console.log(msg3.replace("Wow", "Hey")); //문자열 변경 ->
console.log(msg3.replaceAll("o", "a")); //o 전체 변경
console.log(msg3.replace("o", "a")); //처음에 대한 o 만 변경

let date = "23.03.10";
console.log(date.split(".")); //.을 기준으로 나눠짐

console.log("hi".repeat(5)); //5번 반복

//-----------------------------------배열!!
// push, pop, onshift, shift --> 원본 배열 변화
// indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "hamster"];
arr1[5] = 6;
console.log(arr1);
arr1[8] = 6; //중간에 빈 값이 생길 수 있어요!!!
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1.pop());
console.log(arr1);

arr2.unshift("cat");
console.log(arr2.shift());
console.log(arr2);

//배열.includes(요소) 요소가 있는지 없는지 검사
//true false 반환
console.log(arr2.includes("quakka"));

console.log(arr2.indexOf("quakka")); //인덱스 반환 + 타입도 맞아야 반환 가능 , 0

console.log(arr1.reverse());

console.log(arr1); //reverse(): 기존의 배열 변경 시킴

/* join */
str1 = arr1.join("");
console.log(str1);

/* 배열에서의 for */
//기본 for 문
//for of 문
//forEach 문 -> 매개변수로 익명함수가 들어감

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

console.log("for문");

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  //   console.log(alphabets[i]);
}

for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

/* filter */
console.log("-filter-");
arr3 = arr3.filter(function (num) {
  return num > 3;
});

console.log(arr3);

// let arr2 = ["quakka", "rabbit", "puppy", "hamster"];
let six = arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(six);

/* map, find */
//map : 배열 내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 반환
//[1, 2, 3]
console.log("-map-");
let arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});

console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10);
console.log(arr4);
//arr4 = [10, 20, 30, 40, 50]
//find : 특정 조건을 만족하는 첫번째 요소 반환
let findResult = arr4.find((num) => num >= 30);
console.log(findResult); //조건 만족하는 값 하나만 반환, 30

//실습1
//1~100까지 배열을 for문으로 만들기
let arr5 = [];
for (let i = 0; i < 100; i++) {
  arr5.push(i + 1);
}
console.log(arr5);

//해당 배열의 합
let sum1 = 0;
for (let number of arr5) {
  sum1 = sum1 + number;
}
console.log(sum1);

let sum2 = 0;
arr5.forEach((number) => {
  sum2 = sum2 + number;
});
console.log(sum2);

//실습2
let fruit1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruit2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "용과"];

let same = [];
let diff = [];
/* for문 이용 */
for (let i = 0; i < fruit1.length; i++) {
  if (fruit2.includes(fruit1[i])) {
    same.push(fruit1[i]);
  } else {
    diff.push(fruit1[i]);
  }
}
console.log(same);
console.log(diff);

/* filter이용 */
let same2 = fruit1.filter((fruit) => fruit2.includes(fruit));
let diff2 = fruit1.filter((fruit) => !fruit2.includes(fruit));
console.log(same2);
console.log(diff2);

console.log("배열의 합");
let numbers = [1, 2, 3];
let sum4 = 0;
let sum5 = 0;
let sum6 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum4 = sum4 + numbers[i];
}

for (let num of numbers) {
  sum5 = sum5 + num;
}

numbers.forEach((num) => {
  sum6 = sum6 + num;
});

console.log(sum4, sum5, sum6);
