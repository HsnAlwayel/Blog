import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

// Styles
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
      {posts ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />;
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Posts;
