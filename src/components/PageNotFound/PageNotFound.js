import HeroImg from "../../assets/images/page_not_found.svg";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import { getTheme } from "../../utils/getTheme";
import { useTheme } from "../../contexts/ThemeContext";

export const PageNotFound = ({ errorMsg, gotoMsg, gotoPath }) => {
  const { theme } = useTheme();

  return (
    <div className={`page-container wrapper ${getTheme(theme)}`}>
      <div className="grid-2-col flex-1 gap-1">
        <img src={HeroImg} alt="page not found" className="img-res" />
        <div className="flex flex-col justify-ctr">
          <h2 className="txt-center mg-y-1">{errorMsg}</h2>
          <Link to={gotoPath}>
            <button className="btn btn-primary ">{gotoMsg}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
