import Logo from "../../assets/images/clock_logo.png";
import { NavBar, Footer, Hero } from "../../components";

export const Homepage = () => {
  return (
    <div className="flex flex-col justify-between">
      <NavBar title="Subtle Notes" logo={Logo} />
      <main className="wrapper flex-1">
        <Hero hero-img="" hero-title="" />
      </main>
      <Footer />
    </div>
  );
};
