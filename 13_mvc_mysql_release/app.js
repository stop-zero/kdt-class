const express = require('express');
const app = express();
const PORT = 8001;


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const userRouter = require('./routes/user');
app.use('/user', userRouter);
//app.use('/', userRouter);  라우터를 여러 개 지정할 경우, 경로 정확하게 지정하는 것이 유지보수에 좋음


// 404 error
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
