import api from "../utils/http";
import { clearToken } from "./../utils/tokenStorage";
import { clearSession } from "./../utils/sessionStorage";

// auth
export const authApi = {
  signUp: (data) => api.post("/api/v1/auth/signup", data),

  signIn: (data) => api.post("/api/v1/auth/signin", data),

  logout: () => {
    clearToken();
    clearSession();
  },
};
