const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router(); //객체 router로 라우터 생성

router.get("/", controller.main);

//GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors);

//POST /visitor/write
router.post('/visitor/write', controller.postVisitor);

module.exports = router;


