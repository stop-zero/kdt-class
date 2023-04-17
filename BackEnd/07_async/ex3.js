//실습 1에서 promise로 바꾼 코드를 exec(asyne)함수로 만들어 실행하기
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); 
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`back`);
      resolve(`back`); 
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`callback hell`);
    }, 1000);
  });
}

async function exec() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back("back");
  console.log(txt + "을 실행했구나");
  let msg = await hell("hell");
  console.log("여기는" + msg);
}
exec();

