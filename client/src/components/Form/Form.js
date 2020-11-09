import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/actions/posts";

// Styles
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
  const classes = useStyles();
  const [postData, setpostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setpostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setpostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setpostData({ ...postData, tags: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setpostData({ ...postData, message: event.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setpostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
          onClick={clear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
