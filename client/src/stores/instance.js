import axios from "axios";

const instance = axios.create({
  beseURL: "http://localhost:8000",
});

export default instance;
