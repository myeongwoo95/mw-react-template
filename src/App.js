import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Board from "./pages/board/Board";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Board" element={<Board />} />
      </Routes>
    </Layout>
  );
}

export default App;
