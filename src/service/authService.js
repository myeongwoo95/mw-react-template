import api from "../utils/http";

// auth
export const authApi = {
  signUp: (url, data) =>
    api.post("/api/v1/auth/signup", {
      username: data.username,
      password: data.password,
    }),

  login: (url, data) =>
    api.post(`url`, {
      username: data.username,
      password: data.password,
    }),

  logout: () => {
    console.log("로그아웃~");
  },
};
