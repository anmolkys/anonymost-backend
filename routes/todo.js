const express = require("express");
const router = express.Router();
const {getTodo, saveTodo, updateTodo, deleteTodo} = require('../controllers/todoControl');


router.get("/",getTodo);
router.post("/post",saveTodo);
router.post("/edit",updateTodo);
router.post("/delete",deleteTodo);

module.exports=router;