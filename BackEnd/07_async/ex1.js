// 실습1 풀이

// 기존 코드 
/* function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

// call -> back -> hell 순서로 실행
call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는 ' + message);
    });
  });
}); */


// 풀이 코드
// callback -> promise 변경
//매개변수 cb 다 없애고 return 해줌 > setTimeout을 functio 안으로 > 콜백호출을 resolve로 변경
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); //작업 성공시 then(name)
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`back`);
      resolve(`back`); //작업 성공시 then(back)
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

/* call(`kim`)
  .then(function (result) {
    console.log(result + `반가워`);
    return back();
  })
  .then(function (result) {
    console.log(result + `을 실행했구나`);
    return hell();
  })
  .then(function (result) {
    console.log(`여기는` + result);
  }); */
  
  call(`kim`).then(function(name){
    console.log(`${name} 반가워`)
    return back();
  }).then(function(txt){
    console.log(`${txt}을 실행했구나`)
  return hell();
  }).then(function(msg){
    console.log(msg)
  })

  /* 화살표 함수 */
/*   call(`kim`).then((name)=>{
    console.log(`${name} 반가워`)
    return back();
  }).then((txt)=>{
    console.log(`${txt}을 실행했구나`)
  return hell();
  }).then((msg)=>{
    console.log(msg)
  })
 */