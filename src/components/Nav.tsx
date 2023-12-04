import SwitchLightDark from "./theme/SwitchLightDark";
const Nav = () => {
  return (
    <header className="px-8 py-4 flex justify-between items-center h-16 bg-primary text-white relative shadow-sm">
      <section className="w-1/4 flex justify-start items-center">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl">My App</h1>
        </a>
      </section>

      <section className="relative ml-auto flex justify-end items-center">
        <SwitchLightDark />
        <div>Github</div>
      </section>
    </header>
  );
};

export default Nav;
