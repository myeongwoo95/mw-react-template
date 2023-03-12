import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import SignUp from './pages/sign/SignUp';
import SignIn from './pages/sign/SignIn';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/BoardWrite" element={<BoardWrite />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
