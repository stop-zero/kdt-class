const models = require('../models');

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = async (req, res) => {
  // User.post_signup(req.body, () => {
  //   res.send(true);
  // });
  await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  res.end();
};

exports.signin = (req, res) => {
  res.render('signin');
};

//로그인
exports.post_signin = async (req, res) => {
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

  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log('>>>>>> ', result);
  // 로그인 성공; result = {}
  // 로그인 실패; result = null

  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }

  //내가 잘못친 코드 
  // const result = await models.User.findOne({
  //   where: { userid: req.body.userid, pw: req.body.pw },
  // });
  // if (result.length > 0) {
  //   //로그인 성공; result = {}
    
  //   res.send(true);
  // } else {
  //   //로그인 실패; result = null;
  //   res.send(false);
  // }

};

exports.post_profile = async(req, res) => {
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

  const result = await models.User.findOne({
    where: { userid: req.body.userid },
  });
  console.log(" >>>> ", result);
    if (result) {     //
      res.render('profile', { data: result });
    } 
};

exports.edit_profile = async (req, res) => {
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.send('회원정보 수정 성공');
  // });
  await models.User.update(
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
  // console.log('update>> ', result);
  res.send('회원 정보 수정 성공');
};

exports.delete_profile = async (req, res) => {
  // User.delete_profile(req.body.id, () => {
  //   res.send(true);
  // });
  await models.User.destroy({
    where: { id: req.body.id },
  });
  res.end();
};
