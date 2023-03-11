const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router(); //객체 router로 라우터 생성

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors);


module.exports = router;

