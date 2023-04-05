const express = require("express");
const controller = require("../controller/Cmain");

const router = express.Router(); //객체 router로 라우터 생성

router.get("/", controller.main);

router.get("/axios", controller.axios);

router.get("/users", controller.users);

module.exports = router;
