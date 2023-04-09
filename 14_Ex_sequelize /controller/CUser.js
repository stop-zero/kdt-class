const { query } = require('express');
const models = require('../models');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  // User.post_signup(req.body, () => {
  //   res.send(true);
  // });
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

//로그인
exports.post_signin = (req, res) => {
  // console.log(req.body); //폼에 입력한 로그인 정보
  // User.post_signin(req.body, (result) => {
  //   console.log(result);
  //   // [{}] 서버 측 터미널에 로그인 회원 정보 출력 확인
  //   if (result.length > 0) {
  //     // 존재하는 유저로 로그인 [{}]
  //     res.send(true);
  //   } else {
  //     // 존재하지 않는 유저로 로그인 []
  //     res.send(false);
  //   }
  // });
  models.User.findOne({
    where: { userid: req.query.userid, pw: req.query.pw },
  }).then((result) => {
    if (result.length > 0) {
      // 존재하는 유저로 로그인 [{}]
      res.send(true);
    } else {
      // 존재하지 않는 유저로 로그인 []
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  // console.log(req.body); //singin.ejs => form_info.userid.value = form_login.userid.value;

  // User.post_profile(req.body.userid, (result) => {
  //   console.log(result); // [{}]

  //   if (result.length > 0) {
  //     console.log('****', result);
  //     res.render('profile', { data: result[0] });
  //   } else {
  //     res.redirect('/user/signin');
  //   }
  // });

  models.User.findAll({
    where: { userid: req.body.userid },
  }).then((result) => {
    if (result.length > 0) {
      res.render('profile', { data: result[0] });
    } else {
      res.redirect('/user/signin');
    }
  });
};

exports.edit_profile = async (req, res) => {
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.send('회원정보 수정 성공');
  // });
  const result = await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log('update>> ', result);
  res.send('회원 정보 수정 성공');
};

exports.delete_profile = async (req, res) => {
  // User.delete_profile(req.body.id, () => {
  //   res.send(true);
  // });
  await models.User.destroy({
    where: { id: req.body.id },
  }
  );
  res.end();
};
