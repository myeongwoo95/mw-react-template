import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import { message } from "antd";

//view
import Login from "../pages/Login";

//include
import Loading from "../components/common/Loading";

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({ authService, authErrorEventBus, children }) {
  const [currentUser, setCurrentUser] = useState(() =>
    sessionStorage.getItem("currentUser") != undefined
      ? JSON.parse(sessionStorage.getItem("currentUser"))
      : null
  );

  useEffect(() => {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]); //토큰, 사용자 정보

  const [isLoading, setLoading] = useState(false); //로딩화면

  useImperativeHandle(contextRef, () =>
    currentUser ? currentUser.accessToken : undefined
  );

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.log(err);
      setCurrentUser(undefined);
    });
  }, [authErrorEventBus]);

  const signUp = useCallback(
    async (username, password, name, email, url) =>
      authService
        .signup(username, password, name, email, url)
        .then((currentUser) => setCurrentUser(currentUser)),
    [authService]
  );

  const logIn = useCallback(
    async (userId, userPw) =>
      authService
        .login(userId, userPw)
        .then((currentUser) => {
          setCurrentUser({
            userId: userId,
            accessToken: currentUser.accessToken,
            isAdmin: currentUser.isAdmin,
          });
          // setUser(user);
          setLoading(false);
        })
        .catch((error) => {
          message.info(
            error.response.status === 404
              ? "아이디 혹은 비밀번호가 일치하지 않습니다."
              : "네트워크 에러. 관리자에게 문의하세요"
          );
        }),
    [authService]
  );

  const logout = useCallback(
    async () =>
      authService.logout().then(() => {
        sessionStorage.setItem("currentUser", undefined);
        setCurrentUser(null);
      }),
    [authService]
  );

  const context = useMemo(
    () => ({
      // user,
      currentUser,
      signUp,
      logIn,
      logout,
    }),
    [currentUser, signUp, logIn, logout]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={context}>
      {currentUser ? (
        children
      ) : (
        <>
          <Login onSignUp={signUp} onLogin={logIn} />
        </>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback;
  }
  notify(error) {
    this.callback(error);
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
