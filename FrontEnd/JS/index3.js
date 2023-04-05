console.log("연결");

var name = "홍길동";
console.log(name);

//재선언
var name = "이몽룡";
console.log(name);

/* let
    1. 재선언 불가, 재할당 가능
    2. 선언과 동시에 초기화하지 않아도 됨    */

let a = 1;
a = 2;
console.log(a);

let aa;
aa = 123;
console.log(aa);

/* const
    1. 재선언 불가능, 재할당 불가능
    2. 선언과 동시에 초기화해야 함 */
const b = 3;
console.log(b);

// 연산 사용할 땐 let
let q1 = 2;

q1 = q1 - 2;
console.log(q1);

const q2 = 5;
// q2=q2-5;

//식별자(변수, 함수)이름 규칙
//1. 특수 문자 $ _
// 2. 숫자가 맨 처음이면 안됨
// 3. 예약어 금지(let, const, var, if, for, ...)
let $ = 5;
console.log($);
let _ = 6;
console.log(_);

// let 1st = 1  맨 앞에 숫자x
// let s-t =1
