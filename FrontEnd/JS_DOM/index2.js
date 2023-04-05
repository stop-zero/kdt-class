let div1 = document.getElementById("div1");
console.log(div1);

div1.innerHTML = "여기는 <b>첫번째</b>태그입니다. &hearts;";
console.log(div1.innerHTML);

/* 1. 태그 내용 변경 */
div1.innerText = "              여기는 <b>첫번째</b>태그입니다.    &hearts;";
console.log(div1.innerText);
div1.textContent = "         여기는 <b>첫번째</b>태그입니다.    &hearts;";
console.log(div1.textContent);
//innerText vs textContent => 태그가 그대로 보임
// - textContent
//      - 공백 문자 그대로 반환
//      - IE9 이전 버전에선 사용 안됨
// - innerText
//      - 공백 문자 제거

// div1.innerHTML = "<ul><li>1</li><li>2</li></ul>";

/* 2. 속성 변경 */
let naver = document.getElementById("naver");
//  console.log(naver);
naver.setAttribute("href", "http://www.google.com");
console.log(document.getElementById("pooh").getAttribute("src"));
console.log(document.getElementById("pooh").src);

//직접 접근
console.log(document.getElementById("pooh").id); //pooh
naver.href = "#";

/* css 지정 */
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul > li");

console.log(h1);
console.log(list);

//1. style 속성 사용
list[2].style.backgroundColor = "purple";

// for (let li of list) {
//   li.style.backgroundColor = "yellow";
//   li.style.color = "#444";
//   li.style.fontSize = "1.5rem";
// }

//2. classList
console.log(h1.classList); //클래스 목록, 미리 지정된 클래스가 존재해야 함
h1.classList.add("add-h1");
//classList.add :클래스 추가
//classList.remove : 클래스 제거
//classList.contains :  있는지 없는지 확인, true or false 반환, if문
//classList.toggle : 해당 클래스가 있으면 제거, 없으면 추가

/* 노드 찾기 */
let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

console.log("==자식 노드");
console.log(friends.children);
console.log(friends.children[0]); //이요르

console.log("==부모 노드");
console.log(tigger.parentNode); //부모는 하나밖에 없기 때문에 ul 자체가 나옴

console.log("==형제 노드");
console.log(tigger.previousElementSibling); //이전 노드, 이요르
console.log(tigger.nextElementSibling.nextElementSibling); //피글렛, 로빈

/* 요소 생성, 추가, 삭제 */
let container = document.querySelector(".container");
console.log(container);

let p = document.createElement("p"); //생성
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";

//요소 append : 선택된 요소의 맨 마지막 자식으로 추가됨
container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p3.textContent = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");

container.append(p3, p2);
//container.appendChild(p2); //두개는 붙지않음

//요소 prepend : 선택된 요소의 맨 첫번째 자식으로 추가됨
let li1 = document.createElement("li");
li1.textContent = "캉가";
//ul에 추가
friends.prepend(li1);

//before & after
/* 
- before : 선택된 요소의 앞으로 추가
- after : 선택된 요소의 뒤로 추가
*/

let h3 = document.createElement("h3");
h3.innerText = "h3";
h1.after(h3);

let h2 = document.createElement("h2");
h2.innerText = "h2";
h1.before(h2);

//요소 삭제
/* remove & removeChild
    - 요소.remove 
        - 선택된 요소 삭제
    - 요소.removeChild(자식 요소)
        - 요소의 '자식 요소'가 삭제됨
*/

let firstLi = document.querySelector("li");
console.log(firstLi); //캉가
let ul = firstLi.parentNode;
console.log(ul);

// firstLi.remove(); //캉가 삭제
ul.removeChild(firstLi); //자식 요소 삭제, 캉가 삭제

//문제, 이미지 태그 만들어서 사진 추가, container 안에 추가
//이미지 필수 속성 : src & (alt)
let img = document.createElement("img");
container.append(img);
img.setAttribute("src", "./img/pooh.png");
img.setAttribute("alt", "푸사진");
