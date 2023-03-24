const Key = "token";

export const saveToken = (token) => {
  localStorage.setItem(Key, token);
};

export const getToken = () => {
  return localStorage.getItem(Key);
};

export const clearToken = () => {
  localStorage.removeItem(Key);
};
