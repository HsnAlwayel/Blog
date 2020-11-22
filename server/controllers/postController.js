const Post = require("../models/post");
const mongoose = require("mongoose");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No post with id: ${id}`);

  await Post.findByIdAndUpdate(id, req.body, { new: true });

  res.json(req.body);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
