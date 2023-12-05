// Components
import Hero from "./Hero";
import Benefits from "./Benefits";

const Body = () => {
  return (
    <>
      <Hero />
      <main className="mx-auto container flex flex-col items-center justify-center">
        <h2 className="mt-8 text-3xl font-bold text-center text-gray-800">Empresas asociadas</h2>
        <Benefits />
      </main>
    </>
  );
};

export default Body;