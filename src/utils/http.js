import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// axios request 인터셉터
api.interceptors.request.use(
  (config) => {
    console.log("토큰없어서 아무것도 안함");
    const token = localStorage.getItem("jwt");

    if (token) {
      console.log("토큰있음으로 header에 삽입");
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios response 인터셉터
api.interceptors.response.use(
  (config) => {
    console.log("응답테스트");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
