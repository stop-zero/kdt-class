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
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
