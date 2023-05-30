import axios from "axios";

const instance = axios.create({
  // baseURL: "http://admin.zaya-ananda.com/api/",
  baseURL: "https://admin.jiguur.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
