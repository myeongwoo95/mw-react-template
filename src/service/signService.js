import api from "./../utils/http";

export const testApi = {
  hello: () => api.get("api/hello"),
};
