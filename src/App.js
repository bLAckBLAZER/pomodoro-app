import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Pomodoro, Homepage } from "./pages";
import { PageNotFound } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route
        path="*"
        element={
          <PageNotFound
            errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
            gotoMsg="Go to Homepage"
            gotoPath="/"
          />
        }
      />
    </Routes>
  );
};

export default App;
