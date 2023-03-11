// exports.getVisitors = () => {
//     return[
// {id: 1, name: `홍길동`, comment: `내가 왔다.`},
// {id: 2, name: `이찬혁`, comment: `으라차차`},
// ]
//}

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1', //데이터베이스가 설치된 ip주소
    user: 'user', //데이터베이스 접속 계정명
    password: '1234',   //데이터베이스 접속 비번
    database: 'visitor', //사용할 데이터베이스 이름
    port: '3306'
});

exports.getVisitors = (callback)=>{
    //conn.query(sql, callback ) => conn에 저장되어 있는 데이터베이스 접근해서 sql문 실행
    // => 결과물 callback 함수에 넘겨줌
    const sql = "SELECT * FROM visitor;"
    
    conn.query(sql, (err, rows) =>{
        if(err){
            throw err
        }

        console.log('Visitor.js >>', rows);
        callback(rows);
    })
}
