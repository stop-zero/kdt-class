const Comment = require("../model/Users");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  res.render(req.body);
};

exports.users = (req, res) => {
  const dataSet = `${req.body.id}//${req.body.pw}//${req.body.name}`;
  const userData = Users.userData.split("\n");
  console.log(dataSet);
  console.log(userData);
  for (let i = 0; i < userData.length; i++) {
    if (dataSet == userData[i]) {
      res.send({ text: `${req.body.name}님 환영합니다~!!`, color: "blue" });
    } else {
      res.send({ text: "아이디 또는 비밀번호가 틀렸어요ㅠㅠ", color: "red" });
    }
  }
};
