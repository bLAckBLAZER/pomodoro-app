import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<h1>Homepage</h1>} /> */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
