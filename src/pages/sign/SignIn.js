import React, { useState } from "react";
import { authApi } from "./../../service/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  const DISABLE_TIME = 1500; // 버튼 비활성화 시간(ms)

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target; // 우선 e.target에서 프로퍼티 name과 value 값을 추출

    setInputs({
      ...inputs, // 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정 (inputs를 뺐는데도 동작이되네...?)
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    // 연속클릭방지
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, DISABLE_TIME);

    if (username === null || username === "" || username === undefined) {
      alert("username을 입력해주세요.");
      return;
    }

    if (password === null || password === "" || password === undefined) {
      alert("password를 입력해주세요.");
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    await authApi
      .signIn(data)
      .then((response) => {
        console.log(response);
        alert("성공적으로 로그인되었습니다.");
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div class="flex flex-col mx-auto max-w-7xl p-6">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p class="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <form onSubmit={loginHandler}>
              <div class="relative mb-4">
                <label for="username" class="leading-7 text-sm text-gray-600">
                  username
                </label>
                <input
                  placeholder="username"
                  onChange={onChange}
                  value={username}
                  type="text"
                  id="username"
                  name="username"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">
                  password
                </label>
                <input
                  placeholder="password"
                  onChange={onChange}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                onClick={loginHandler}
                disabled={isDisabled}
              >
                로그인
              </button>
            </form>
            <Link to="/SignUp" class="mt-3 flex justify-center">
              <a href="#" class="text-xs text-gray-500">
                아직 회원이 아니신가요?
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
