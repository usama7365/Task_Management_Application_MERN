const express = require('express');
const router = express.Router();
const { PostLoginSchema } = require("../controllers/Login.controllers");
const { PostSignupSchema } = require("../controllers/signup.controller");



router.post('/login', PostLoginSchema);

router.post('/signup', PostSignupSchema);

module.exports = router;