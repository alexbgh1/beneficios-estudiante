// Components
import Hero from "./Hero";
import Benefits from "./Benefits";
import Filters from "./Filters";
import { useFilters } from "../hooks/useFilters";
import { useBenefits } from "../hooks/useBenefits";

const Body: React.FC = () => {
  const { filterBenefits, handleFilter } = useFilters();
  const { benefits } = useBenefits();

  const filteredBenefits = filterBenefits(benefits);

  return (
    <>
      <Hero />
      <main className="flex-1 justify-start pb-8 border-t-[1px] border-accent bg-primary w-full min-w-full container flex flex-col items-center">
        <h2 className="mt-8 text-3xl font-bold text-center sm:text-4xl text-primary">Empresas asociadas</h2>
        <Filters handleFilter={handleFilter} />
        <p className="mt-0 mb-1 text-center text-primary/60">{filteredBenefits.length} beneficios encontrados</p>
        <Benefits benefits={filteredBenefits} />
      </main>
      <div className="h-[150px] bg-primary"></div>
    </>
  );
};

export default Body;
