const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// 회원가입 API 엔드포인트
router.post("/register", authController.signup);

module.exports = router;
