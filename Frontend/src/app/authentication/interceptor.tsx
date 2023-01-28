import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
  },
});
instance.interceptors.request.use(
  (request) => {
    const user = sessionStorage.getItem("user");
    const authenticationToken = user && JSON.parse(user)?.token;
    request.headers["Authorization"] = "Bearer " + authenticationToken;
    // Do something before request is sent
    return request;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
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
