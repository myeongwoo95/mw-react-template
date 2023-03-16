import React, { useState } from "react";
import { authApi } from "./../../service/authService";

const SignUp = () => {
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

  const signUphandler = async () => {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, DISABLE_TIME);

    if (username === null || username === "" || username === undefined) {
      alert("username을 입력해주세요.");
      return;
    }

    if (username.length > 20) {
      alert("username은 20글자 내외로 정해주세요.");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      alert("username은 영어와 숫자 조합으로만 가능합니다.");
      return;
    }

    if (password === null || password === "" || password === undefined) {
      alert("password를 입력해주세요.");
      return;
    }

    if (password.length < 8) {
      alert("password는 최소 8글자 이상이여합니다.");
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    const response = await authApi.signUp(data);

    console.log(response);

    //일반 axios로 사용해보셈, 만약 setupProxy가 적용됫다면 서버측에서 cors 설정 3000번대를 5000대로 바꿔도 되야 내 생각이 맞음(일단 서버는 3000포트는 허용시켜줫는데 랜덤포트 (5000으로 바꿔주셈))
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      signUphandler();
    }
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
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-gray-600">
                username
              </label>
              <input
                placeholder="username"
                onKeyUp={handleKeyDown}
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
                onKeyUp={handleKeyDown}
                onChange={onChange}
                value={password}
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={signUphandler}
              disabled={isDisabled}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              가입하기
            </button>
            <a href="#" class="text-xs text-gray-500 mt-3 m-auto">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
