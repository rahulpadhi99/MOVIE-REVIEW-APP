import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

// Request Interceptor
instance.interceptors.request.use(
  (request) => {
    const user = sessionStorage.getItem("user");
    const authenticationToken = user && JSON.parse(user)?.token;
    request.headers["Authorization"] = "Bearer " + authenticationToken;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error?.response);
  }
);

export default instance;
