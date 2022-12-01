const express = require("express");
const router = express.Router();
const { validator, validatorSigin } = require("../models/user");
const {signUp, signIn} = require("../constrollers/auth.controllers")
const validate = require("../middleware/validate");


router.post("/signup", validate(validator), signUp);
router.post("/signin", validate(validatorSigin), signIn);

module.exports = router;

