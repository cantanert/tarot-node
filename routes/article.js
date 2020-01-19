const express = require("express");
const articleController = require("../controllers/article");

const router = express.Router();

router.get("/",articleController.getArticles);

module.exports = router;