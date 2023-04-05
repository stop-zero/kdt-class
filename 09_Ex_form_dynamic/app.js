const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing 주소 설정
app.get("/", function (req, res) {
  res.render("dynamic");
});

//2-1. /axios get 요청
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//2-2. /axios post 요청
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`웹서버 실행!`);
  console.log(`http://localhost:${PORT}`);
});
