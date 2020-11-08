import { action, makeObservable, observable } from "mobx";
import instance from "./instance";

class PostStore {
  posts = [1.1, 2.2];

  fetchPosts = async () => {
    console.log("im here1111");
    try {
      const res = await instance.get("http://localhost:8000/");
      this.posts = res.data;
      console.log("im here", this.posts);
    } catch (error) {
      console.log("error", error);
    }
  };
  constructor() {
    makeObservable(this, {
      posts: observable,
      fetchPosts: action,
    });
  }
}

const postStore = new PostStore();
postStore.fetchPosts();
export default postStore;
