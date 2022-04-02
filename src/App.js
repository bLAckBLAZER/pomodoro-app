import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Pomodoro } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<h1>Homepage</h1>} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
    </Routes>
  );
};

export default App;
