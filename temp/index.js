//1실습 

const usersModel = `apple//1234//사과사과
banana//4321//바나나나나
happy//qwer1234//해피해피`;
console.log(usersModel);

const userDatas = usersModel.split('\n'); // \: 원 기호
console.log(userDatas);
// [
//   'apple//1234//사과사과',
//   'banana//4321//바나나나나',
//   'happy//qwer1234//해피해피'
// ]

const users = []; // 유저 정보를 저장할 배열
const userIds = []; // 유저 아이디만 저장할 배열

for (let user of userDatas) {
    console.log(user);
  // apple//1234//사과사과
  // banana//4321//바나나나나
  // happy//qwer1234//해피해피

    users.push({
    realId: user.split('//')[0], // apple -> banana -> happy
    realPw: user.split('//')[1], // 1234 -> 4321 -> qwer1234
    name: user.split('//')[2], // 사과사과 -> 바나나나나 -> 해피해피
    });
  userIds.push(user.split('//')[0]); // apple -> banana -> happy
}
console.log(users);
// [
//   { realId: 'apple', realPw: '1234', name: '사과사과' },
//   { realId: 'banana', realPw: '4321', name: '바나나나나' },
//   { realId: 'happy', realPw: 'qwer1234', name: '해피해피' }
// ]

console.log(userIds);
// [ 'apple', 'banana', 'happy' ]


// ============================================================
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('banana')); 