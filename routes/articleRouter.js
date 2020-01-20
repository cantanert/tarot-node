const express = require("express");
const articlesController = require("../controllers/articleController");
const router = express.Router();

router.get("/getArticles",articlesController.getArticles);
router.post("/addArticle",articlesController.createArticle);

module.exports = router;
