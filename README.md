$ npx create-react-app mw-react-template
$ npm install react-router-dom axios http-proxy-middleware dotenv
$ npm install -D tailwindcss postcss autoprefixer # 나중에 postcss autoprefixer없이해봐 될꺼같음
$ npx tailwindcss init

RCA - tailwind 설정

# tailwind.config.js

module.exports = {
mode: "jit", // tailwind CSS의 실험적인 기능 중 하나인 JIT(Just-In-Time) 모드
darkMode: false, // or 'media' or 'class'
content: [
"./src/**/*.{js,jsx,ts,tsx}",
 ],
theme: {
extend: {},
},
plugins: [],
}

# ./src/styles/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
