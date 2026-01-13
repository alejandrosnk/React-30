import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DayPage from "./pages/DayPage";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/day/:n" element={<DayPage />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div style={{ padding: 24 }}>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
