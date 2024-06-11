import axios from "axios";
// base-url
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("persist:auth");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    // refresh token
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
