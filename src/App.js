import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/BoardWrite" element={<BoardWrite />} />
      </Routes>
    </Layout>
  );
}

export default App;
