//컴포넌트 대문자로 시작
//컴포넌트는 하나의 파일에 하나의 함수만
function Clock(){
    return <div className="clock-container">
        {/* toLocalTimeString() 현재 상요자의 문화권에 맞는 시간을 표기해주는 것 */}
        <h1>현재 시간은 {new Date().toLocaleTimeString()}</h1>
    </div>
}

//이렇게 쓰면 안 됨. 
// export function Clock2(){
//     return(
//         <div>
//             <h1>쓰면 안됨</h1>
//         </div>
//     )
// }

// 받는 쪽으로 전송하기 위해 , 딱 하나만 존재. 
export default Clock;