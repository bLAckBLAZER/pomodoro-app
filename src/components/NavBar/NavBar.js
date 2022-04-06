import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { getTheme } from "../../utils/getTheme";

export const NavBar = ({ title, logo }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className={`navbar fixed ${getTheme(theme)}`}>
      <Link to="/">
        <div className="flex align-ctr justify-ctr">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-heading">{title}</div>
        </div>
      </Link>
      <ul className="nav-actions">
        <li className="nav-action-item">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </li>
        <li className="nav-action-item">
          <i
            class={`far ${theme === "dark" ? "fa-sun" : "fa-moon"} fa-2x`}
            onClick={() => setTheme(theme === "dark" ? "theme" : "dark")}
          ></i>
        </li>
      </ul>
    </nav>
  );
};
