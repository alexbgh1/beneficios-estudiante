// Components
import Hero from "./Hero";
import Benefits from "./Benefits";

const Body = () => {
  return (
    <>
      <Hero />
      <main className="border-t-[1px] border-accent bg-third/25 w-full min-w-full container flex flex-col items-center justify-center">
        <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-center text-gray-800">Empresas asociadas</h2>
        <Benefits />
      </main>
    </>
  );
};

export default Body;
