console.log("연결");
/* 요소 선택
    - querySelector
    - querySelectorAll
    - getElementById
    - getElementsByClassName
    - ..
     */
console.log(document);
console.log(document.head);
console.log(document.body); //스크립트를 헤드안에 넣으면 null 값 나옴, body 밑에 넣으면 잘 나옴/ 읽기 순서때문에 /헤드 안에 넣고 defer 넣으면 잘 나옴
console.log(document.title); //타이틀 이름
console.log(document.URL); //문서 안에 있는 게 아니더라도, 작성하고 있는 값 을 가지고 옴 / 123.0.0.1 은 자기 자신을 뜻함

//1. getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

//2. getElementsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

//3,getElementByTagName
console.log(document.getElementsByTagName("div"));

//4. getElementByName
console.log(document.getElementsByName("id"));

//5. querySelector , 선택자
console.log(document.querySelector(".pink")); //핑크1 클래스 가져오기
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name='id']"));

//6. querySelectorAll , 여러 개 선택
console.log(document.querySelectorAll(".pink")); //핑크 클래스 4개 전부 다
console.log(document.querySelectorAll("input")); //input 태그 전부

console.log(document.querySelectorAll(".pink")[0]); //핑크 클래스 4개 전부 다
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

//실습 for of 문
let pink = document.querySelectorAll(".pink");
console.log(pink);
for (let pinks of pink) {
  console.log(pinks);
}
