import { useState } from "react";
// Types
import { Benefit } from "../types/benefit.d.type";
import { FilterFunction, HandleFilter } from "../types/filter.d.type";

const useFilters = () => {
  const [filters, setFilters] = useState<string>("todos");

  const handleFilter: HandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(event.target.value.toLowerCase());
  };

  const filterBenefits: FilterFunction = (benefits: Benefit[]) => {
    return benefits.filter((benefit: Benefit) => {
      if (filters === "todos") {
        return true; // No hay filtro, todos los beneficios son visibles
      } else {
        return benefit.details.aliases?.some((filter) => filter.includes(filters));
      }
    });
  };

  return { filterBenefits, handleFilter };
};
export { useFilters };
