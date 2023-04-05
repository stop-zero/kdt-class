const express = require("express");
const controller = require("../controller/Cmain");
// controller = {
//     main:()=>{},//함수
//     comments : ()=>{} //함수
// }
//
//const app = express();
//app.get();
//app.router 로 라우터도 만들었다 생각
const router = express.Router(); //객체 router로 라우터 생성

router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get('/comment/:id', controller.comment);

module.exports = router;

