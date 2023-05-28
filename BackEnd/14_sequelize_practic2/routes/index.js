const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT
// Read All -> Create -> Delete -> Edit (w. Read One) 순으로 작업

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors); // 전체 조회

// GET /visitor/get => localhost:PORT/visitor/get?id=N
router.get('/visitor/get', controller.getVisitor); // 하나 조회 (ver. query)
// router.get('/visitor/:id', controller.getVisitor2); // 하나 조회 (ver. params)

// POST /visitor/write => localhost:PORT/visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

// PATCH /visitor/edit => localhost:PORT/visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 수정

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제

module.exports = router;
