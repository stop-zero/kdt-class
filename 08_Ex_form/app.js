const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 7000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); //ejs를 담을 views 폴더 경로 설정
//body-parser
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); //json 형태로 데이터를 주고 받음 , 확장자 중 하나

app.get("/", function (req, res) {
  const myTitle = "실습 풀이";
  res.render("index", { title: myTitle });
});

app.get("/index1", function (req, res) {
  const myTitle = "실습1. get으로 정보 받기";
  res.render("index1", { title: myTitle });
});

app.get("/index2", function (req, res) {
  const myTitle = "실습2. post으로 받기";
  res.render("index2", { title: myTitle });
});

app.get("/result1", function (req, res) {
  res.render("result1", {
    title: "실습1. 폼 전송 완료!",
    userInfo: req.query,
  });
});

app.post("/result2", function (req, res) {
  res.render("result1                                                            ", {
    title: "실습2. 폼 전송 완료!",
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`웹서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
