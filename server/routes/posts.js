const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
module.exports = router;
