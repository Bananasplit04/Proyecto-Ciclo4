const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const mostrar = require("../constrollers/privateControllers.js");

router.get("/mostrardatos", checkAuth, mostrar);

module.exports = router;