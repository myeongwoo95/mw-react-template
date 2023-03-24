const Key = "currentUser";

export const saveSession = (userInfo) => {
  sessionStorage.setItem(Key, userInfo);
};

export const getSession = () => {
  return sessionStorage.getItem(Key);
};

export const clearSession = () => {
  sessionStorage.removeItem(Key);
};
