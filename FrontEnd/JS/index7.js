console.log("연결!");

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}
console.log("-----------");
for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}
for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}
// 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 5부터 1까지 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}

let n = 11;
let sum = 0;
// 1부터 n까지의 합
for (let i = 1; i < n + 1; i++) {
  sum = sum + i;
  //   sum +=i
}
console.log(sum);

/* 배열과 for문 */
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열 내의 숫자 합 구하기
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; i++) {
  numsSum = numsSum + numsArr[i];
}
console.log(numsSum);

// 1~20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + i;
  }
}
console.log(sum2);

//실습 13 배수이면서 홀수인 수
// let num3 = Number(prompt('숫자를 입력해주세요'));
// for (let i = 1; i < num3 + 1; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
// 앞에 false인 확률이 높은 애를 써주면 효율적임
//     console.log(i);
//   }
// }

// 구구단 만들어보기
for (let i = 1; i < 10; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

/* 2. while */
let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}
n2 = 10;
while (n2 >= 5) {
  console.log(n2);
  n2--;
}
n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2--;
}
n2 = 1;
while (true) {
  console.log("안녕");
  if (n2 == 10) {
    break;
  }
  n2++;
}
n2 = 0;
while (confirm("계속 진행?")) {
  n2++;
  alert(`${n2}번째 alert 창`);
}
// continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 += i;
}
console.log(sum3);

//while 구구단
/* let i =1; j=i;
while(i<10){
  console.log(`---${i}단---`);
  while(j<10){
    console.log(i+ "x" + j + "=" + i*j);
    j++
  }
  i++;
  j=1;

} */

for(let i = 1; i<10; i++){
  if(i==6){
    console.log('1부터 5까지만');
    break;
  }
  console.log(i);
}

//continue
let sum7 = 0;
for(let i = 0; i<100; i++) {
  if(i%2== 0){
    continue;
  }
  sum7+=i;
}
console.log(sum7);
