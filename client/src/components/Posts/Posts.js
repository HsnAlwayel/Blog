import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

// Styles
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("Posts -> posts", posts);
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>;
      <Post />
    </>
  );
};

export default Posts;
