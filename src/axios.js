import axios from "axios";

const instance = axios.create({
  /// THE API URL(CLOUD FUNCTION)
  baseURL: "https://us-central1-clone-de7cb.cloudfunctions.net/api",
});

export default instance;

//https://us-central1-clone-de7cb.cloudfunctions.net/api
//http://localhost:5001/clone-de7cb/us-central1/api
