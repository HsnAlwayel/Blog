import * as api from "../../api";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const res = await api.createPost(post);

    dispatch({ type: "CREATE", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
