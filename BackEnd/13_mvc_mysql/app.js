const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true })); //form body 사용
app.use(express.json());
//여기까지 app_befor.js랑 같음

const indexRouter = require("./routes");
//require : 폴더까지만 접근할 경우엔, 자동으로 index.js 파일을 찾아감.
app.use("/", indexRouter);
// '/ ~~~'  모든 라우터를 /routes/index.js에 정의해 봤으니,
// /routes/index.js 이 파일을 읽어보면 된다.

// [404 error]
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//