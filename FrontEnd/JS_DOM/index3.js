let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
console.log(btn1, btn2, btn3, btn4);

//click
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨네요!");
});

//mouseover : 커서 올렸을 때
btn1.addEventListener("mouseover", function () {
  // btn1.style.backgroundColor='aqua';
  //자기자신, 재사용 방지하고 싶으면this.
  this.style.backgroundColor = "pink";
});

//mouseout : 마우스가 요소 벗어날 때
btn1.addEventListener("mouseout", function () {
  this.style.backgroundColor = "black";
});

//mousedown : 마우스 버튼 누르고 있을 때
btn2.addEventListener("mousedown", function () {
  this.style.backgroundColor = "red";
});

//mouseup : 마우스 버튼 떼는 순간
btn2.addEventListener("mouseup", function () {
  this.style.backgroundColor = "green";
});




//버튼 2눌럿을 때 컨테이너에 뭔가 추가되게 만들기
let conatiner = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "greenyellow";
  div.innerHTML = "hi";
  container.append(div);
});

btn3.addEventListener("click", changeColor); //클릭 되었을 때 호출 ()하면 안돼
//추가할 거 미리 선언하고  사용하는 방법(btn2 눌렀을 때 생기는 div배경색을 바꿀 예정), 재사용 가능
function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  //마지막에 추가된div만 색 변경
  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}

//scoll 이 어디까지 가면 나타나기
console.log(window);
window.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(scrollY);

  let pos = this.document.querySelector(".pos");
  if (this.scrollY > 700) {
    pos.style.opacity = "1";
  }
});

//클릭을 눌렀을 때
const btn = document.querySelector("button");
const input = document.querySelector("input");
// console.log(btn, input) //test용
btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e.code);
  console.log(e.key);
  //   console.log(e.keyCode);

  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowDown") {
    console.log("아래 방향키를 누르셨군요");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키를 누르셨군요");
  } else {
    console.log("others");
  }
});

//Todo list
const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
console.log(todoForm, todos);

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  //실제로 폼이 제출되는 것을 막는 것
  //이벤트 전달을 막는 방법
  e.preventDefault();

  const todoInput = document.querySelector("input[name]");
  //   console.log(todoInput);
  console.dir(todoInput);
  console.log(todoInput.value);

  //input 문자열 저장
  /* const todo = todoInput.value;
  const newTodo = document.createElement("li"); //<li></li>
  newTodo.append(todo);//<li>todo</li>
  todos.append(newTodo) //ul */

  //공백문자면 추가가 안되게
  const todo = todoInput.value.trim();
  if (todo !== "") {
    const todo = todoInput.value;
    const newTodo = document.createElement("li"); //<li></li>
    newTodo.append(todo); //<li>todo</li>
    todos.append(newTodo); //ul
  }

  //입력값 초기화
  todoInput.value = "";
});

//실시간 입력
const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function () {
  console.log("change!");
});

//변화할 때마다
chgInput.addEventListener("input", function () {
  console.log("change?");
  let div = document.querySelector(".intro");
  div.innerHTML = chgInput.value;
});
