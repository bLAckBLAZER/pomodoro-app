import Logo from "../../assets/images/clock_logo.png";
import { NavBar, Footer, Hero } from "../../components";
import { useTheme } from "../../contexts/ThemeContext";
import { getTheme } from "../../utils/getTheme";
import { useTitle } from "../../utils/useTitle";

export const Homepage = () => {
  useTitle("Home | Subtle Clock");

  const { theme } = useTheme();

  return (
    <div className={`flex flex-col justify-between ${getTheme(theme)}`}>
      <NavBar title="Subtle Notes" logo={Logo} />
      <main className="wrapper flex-1">
        <Hero hero-img="" hero-title="" />
      </main>
      <Footer />
    </div>
  );
};
