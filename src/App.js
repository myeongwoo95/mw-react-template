import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import SignUp from "./pages/sign/SignUp";
import SignIn from "./pages/sign/SignIn";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} initial />

        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/BoardWrite" element={<BoardWrite />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
