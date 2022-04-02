import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Pomodoro, Homepage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default App;
