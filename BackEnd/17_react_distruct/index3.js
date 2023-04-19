//단축 평가 || (논리합) &&(논리곱)

const a = 20;
const b  =10;

//논리곱: 조건식일 때 
a>b && console.log('A가 큽니다. ') //A가 큽니다. 
// a<b && console.log('A가 큽니다. ') // 아무것도 안나와


//논리합 :
function test(name){
    const obj = {
        a : name || "기본이름"
    }
    console.log(obj) 
} 
test() //{ a: '기본이름' }
test('홍길동') //{ a: '홍길동' }
 
