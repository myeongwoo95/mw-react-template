import api from "../utils/http";

// auth
export const authApi = {
  signUp: async (data) =>
    api.post("/api/v1/auth/signup", {
      username: data.username,
      password: data.password,
    }),
};
