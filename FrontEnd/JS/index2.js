/* alt shift a 주석 단축키
    자료형
    - 기본
        - string
        - number
        - boolean
        - null
        - nudefined

    - 객체
        - array
        - object
*/

// 1. string
let myName = "길동";
let email = "gildong@naver.com";
let city = "'서울'";

console.log(myName);
console.log(email);
console.log(city);

//문자와 변수를 동시에 출력
console.log("내 이름은", myName, "이고 이메일은", email, "입니다.");
console.log("내 이름은 " + myName + "이고 이메일은" + email + "입니다.");
//템플릿 리터럴
console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다.`);
let gildong = `내 이름은 ${myName}이고 이메일은 ${email}입니다.`;
console.log(gildong);

//2. number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
//NaN : not a number 숫자가 아니다
console.log("apple" - 3); //NaN

//3. boolean
let checked = true;
let unchecked = false;
console.log(checked); //true
console.log(unchecked); //false

//4. undefined
let undef;
console.log(undef); //undefined

//5. null
let empty = null;
console.log(empty); //null

//6. array
let fruits = ["orange", "pineapple", "grape", "apple"];
let fruits2 = new Array("orange", "pineapple", "grape", "apple");

console.log(fruits[0], fruits[1]); //orange pineapple

let date = [1, "ji young", false, null, undefined];
console.log(date[4]); //undefined

// array : 2차원 배열
let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[0][0]); //0번째 줄 0번째 요소, 가
console.log(korean[1][1]); //1번째 줄 1번째 요소, 마

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

//3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, , 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]); //8

//7. object key-value
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

console.log(cat);
// 점 표기법
// object 이름 . key 이름
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// 대괄호 표기법
// object 이름['']
console.log(cat["name"]);

let introduce = {
  name: "ji young",
  age: 23,
  study_now: true,
};
//점 표기법
//object 이름.key이름
console.log(introduce.name); //ji young
// 대괄호 표기법
// object 이름['']
console.log(introduce["name"]);

console.log(introduce);

/* typeof 사용 */
console.log(typeof "문자"); //string
console.log(typeof 123); //number
console.log(typeof true); //boolean
// 변수가 아니여도 사용 가능
console.log(typeof cat); //{}
console.log(typeof []); //object
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log(typeof und); //undefined

console.log(typeof 1 + " isn't " + typeof "마" + " data type.");
// console.log(`${typeof 1} isn't ${typeof "1"} data type.`);
console.log(
  "typeof를 boolean 이나 null에 사용하면" +
    typeof [] +
    "결과를 얻을 수 있습니다."
);

//형 변환
// let mathScore = prompt("수학 점수를 입력하세요"); //100
// let engScore = prompt("영어 점수를 입력하세요"); //90

//10090/2 = 5045
//
// let avg = (mathScore + engScore) / 2;

// console.log(avg);

console.log("------------");
//1. -> 문자 string()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1)); //string
console.log(typeof String(str2)); //string
console.log(typeof String(str3)); //string
console.log(typeof str1); //boolean
console.log(typeof str1.toString()); //string

//2. ? -> 숫자 Number()
let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(typeof n1); //boolean
console.log(typeof n2); //boolean
console.log(typeof n3); //string

console.log(typeof Number(n1)); //1
console.log(typeof Number(n2)); //0
console.log(typeof Number(n3)); //123.9

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3)); //123, 소수점은 버림/정수형

// 실습
let mathScore = prompt("수학 점수를 입력하세요"); //'77' ->77
let engScore = prompt("영어 점수를 입력하세요"); //'88' -> 88

let avg = (Number(mathScore) + Number(engScore)) / 2;
console.log(avg);
