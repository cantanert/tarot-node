const express = require("express");
const articlesController = require("../controllers/articles");
const router = express.Router();

router.get("/",articlesController.getArticles);

module.exports = router;
