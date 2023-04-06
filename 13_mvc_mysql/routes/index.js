const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router(); //객체 router로 라우터 생성

router.get('/', controller.main);

//GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors);

//POST /visitor/write
router.post('/visitor/write', controller.postVisitor);

// GET /visitor/get
router.get('/visitor/get', controller.getVisitor); //하나 조회

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); //하나 수정

// DELETE /visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); //하나 삭제

module.exports = router;
