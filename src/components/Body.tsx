// Components
import Hero from "./Hero";
import Benefits from "./Benefits";
import Filters from "./Filters";
import { useFilters } from "../hooks/usefilters";

const Body = () => {
  const { filteredBenefits, handleFilter } = useFilters();
  return (
    <>
      <Hero />
      <main className="flex-1 justify-start pb-8 border-t-[1px] border-accent bg-primary w-full min-w-full container flex flex-col items-center">
        <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-center text-primary">Empresas asociadas</h2>
        <Filters handleFilter={handleFilter} />
        <Benefits filteredBenefits={filteredBenefits} />
      </main>
    </>
  );
};

export default Body;
