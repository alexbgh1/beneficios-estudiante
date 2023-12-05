// Components
import SwitchLightDark from "./theme/SwitchTheme";
import { GithubIcon } from "../components/icons";
const Nav = () => {
  return (
    <header className="px-8 py-4 flex justify-between items-center h-14 bg-secondary text-white relative shadow-sm">
      <NavLeft />
      <NavRight />
    </header>
  );
};

// Logo
const NavLeft = (): JSX.Element => (
  <section className="w-1/4 flex justify-start items-center">
    <a href="/" className="flex items-center">
      <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
      <h1 className="text-2xl">My App</h1>
    </a>
  </section>
);

// Switch + Github
const NavRight = (): JSX.Element => (
  <section className="relative ml-auto flex justify-end items-center gap-8">
    <SwitchLightDark />
    <a href="https://github.com/alexbgh1/beneficios-estudiante" target="_blank" className="block">
      <GithubIcon className="fill-white h-6 w-6 cursor-pointer" />
    </a>
  </section>
);

export default Nav;
