/* val() */
function getValue() {
  // 입력된 value 값 가져오기
  let value = $("input").val();
  // let value = document.querySelector('input').value;
  alert(value);
}
function setValue() {
  //input의 value 값 설정
  $("input").val("설정!!");
}

/* css() */
function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 20px; color: red;";
}
function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net");
}

/* text() */
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "js 로 바꿨습니다";
}
function changeTextJquery() {
  $(".p-text").text("<b>jquery</b>로 바꿨습니다.");
}

/* html() */
function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js로 바꿨습니다";
}
function changeHtmlJquery() {
  $(".p-html").html("<b>jquery</b>로 바꿨습니다");
}

/* 요소 추가하기 */
/* append() */
function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.append(li);
}

function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}

/* prepend() */
function prependJS() {
  let li = document.createElement("li");
  li.innerText = "prepend()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.prepend(li);
}
function prependJquery() {
  $(".colors").prepend("<li>append()로 추가된 jquery</li>");
}

/* after() */
function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after() 형제 요소 로 추가된 js";
  green.after(li);
}
function afterJquery() {
  $(".green").after("<li>after()형제요소로 추가된 jquery</li>");
}

/* before() */
function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제 요소 로 추가된 js";
  green.before(li);
}
function beforeJquery() {
  $(".green").before("<li>before()형제요소로 추가된 jquery</li>");
}

/* 요소 삭제하기 */
/* remove() */
function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}
function removeJquery() {
  $("#li2").remove();
}

/* empty() jquery에만 있음*/
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJquery() {
  $("ul.nums").empty();
}

/* 요소 탐색 */
/*  */
function findParent() {
  //parent(): 부모요소 반환
  console.log($(".child2").parent());
}

function findParents() {
  //parents() : 조상 요소 전부 반환
  //js는 없는 메소드
  console.log($(".child2").parents());
}

function findNext() {
  //next() : nextSibling
  console.log($(".child2").next());
}

function findPrev() {
  //prev() : previousSibling
  console.log($(".child2").prev());
}

function findChildren() {
  //children() : 자식 요소 모두 반환, js에서의 children()과 동일
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
}

//클래스 조작
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  // $('#hi').removeClass('fs-50') //특정 클래스만 제거
  $("#hi").removeClass(); // 빈값으로 두면 클래스 모두 제거
}
function hasClass() {
  //true나 false로 반환
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
