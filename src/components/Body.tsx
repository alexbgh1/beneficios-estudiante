// Types
import { FilterFunction } from "../types/filter.d.type";
import { Benefit } from "../types/benefit.d.type";
// Components
import Hero from "./Hero";
import Benefits from "./Benefits";
import Filters from "./Filters";
import { useFilters } from "../hooks/usefilters";
import { useBenefits } from "../hooks/useBenefits";

const Body = () => {
  const {
    filterBenefits,
    handleFilter,
  }: { filterBenefits: FilterFunction; handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void } =
    useFilters();

  const { benefits }: { benefits: Benefit[] } = useBenefits();
  const filteredBenefits = filterBenefits(benefits);

  return (
    <>
      <Hero />
      <main className="flex-1 justify-start pb-8 border-t-[1px] border-accent bg-primary w-full min-w-full container flex flex-col items-center">
        <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-center text-primary">Empresas asociadas</h2>
        <Filters handleFilter={handleFilter} />
        <p className="mt-0 mb-1 text-center text-primary/60">{filteredBenefits.length} beneficios encontrados</p>
        <Benefits benefits={filteredBenefits} />
      </main>
    </>
  );
};

export default Body;
