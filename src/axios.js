import axios from "axios";

// base url to make requests from the api
const instance = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10"
});

export default instance;
