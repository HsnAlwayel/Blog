const Post = require("../models/post");

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
  const { id: _id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(204).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
