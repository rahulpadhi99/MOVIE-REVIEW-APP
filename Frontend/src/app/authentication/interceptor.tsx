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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response);
  }
);

export default instance;
