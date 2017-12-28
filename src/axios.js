import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://vuejs-http-10290.firebaseio.com/"
});

export default axiosInstance;
