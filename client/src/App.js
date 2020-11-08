import React from "react";
import { observer } from "mobx-react";

// Styles
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import useStyles from "./styles";
// Components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import postStore from "./stores/postStore";

const App = () => {
  const classes = useStyles();
  postStore.fetchPosts();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          App
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xc={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xc={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default observer(App);
