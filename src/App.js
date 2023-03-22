import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import SignUp from "./pages/sign/SignUp";
import SignIn from "./pages/sign/SignIn";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

export const routes = [
  { path: "/", component: MainPage, initial: true },

  { path: "/BoardList", component: BoardList },
  { path: "/BoardWrite", component: BoardWrite },

  { path: "/SignIn", component: SignIn },
  { path: "/SignUp", component: SignUp },

  { path: "*", component: NotFound },
];

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            initial={route.initial ? true : false}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
