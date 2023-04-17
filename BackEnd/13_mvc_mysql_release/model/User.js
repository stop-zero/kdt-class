// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: '1234',
  database: 'kdt',
  port: '3306',
});

//회원가입
exports.post_signup = (data, cb) => {
  //data: req.body
  //cb : sql문 실행 후, 할 일 함수
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    //res.end(); 데이터 없이 응답할 때 사용 
    //cb() : 실행이 잘 되었는지 알려주는 
    cb();
  });
};

//로그인
exports.post_signin = (data, cb) => {
  //중복검사 대신 limit 1 로 지정
  const sql = `SELECT * FROM user WHERE userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

//로그인한 유저 한 명 불러오기
exports.post_profile = (userid, cb) => {
  const sql = `SELECT * FROM user WHERE userid = '${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('Model User: ', rows);
    cb(rows);
  });
};

//수정
exports.edit_profile = (data, cb) => {
  const sql = `UPDATE user SET userid = '${data.userid}', name = '${data.name}', pw = '${data.pw}' WHERE id='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

//삭제
exports.delete_profile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id = '${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
