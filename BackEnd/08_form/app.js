const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); //ejs를 담을 views 폴더 경로 설정
//body-parser
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); //json 형태로 데이터를 주고 받음 , 확장자 중 하나

//라우팅(routing) : 경로 설정
//브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!

//localhost:PORT/ 접속했을 때, index.ejs 를 보여주겠다.
app.get("/", function (req, res) {
  //views/index.ejg 파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다";
  res.render("index", { title: myTitle });
});

app.get("/getForm", function (req, res) {
  // console.log(req); //{xx: {} , yy: {}, ...}
  console.log(req.query); //{ id: '1234', pw: '1234' }
  // res.send("get 요청 성공~!");
  res.render("result", { title: "GET 요청 폼 결과 확인하기" , userInfo: req.query});
  
});

app.post("/postForm", function (req, res) {
  console.log(req.body); //{ id: '12345', pw: '12345' }
  // res.send("post 요청 성공!!");
  res.render("result", { title: "POST 요청 폼 결과 확인하기", userInfo: req.body });
});

app.listen(PORT, function () {
  console.log(`웹서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
