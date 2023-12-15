import { useState } from "react";

import { Benefit } from "../types/benefit.d.type";

const useFilters = () => {
  const [filters, setFilters] = useState("todos");

  const handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters(event.target.value.toLowerCase());
  };

  const filteredBenefits: (benefits: Benefit[]) => Benefit[] = (benefits: Benefit[]) => {
    return benefits.filter((benefit: Benefit) => {
      if (filters === "todos") {
        return true; // No hay filtro, todos los beneficios son visibles
      } else {
        return benefit.details.aliases?.some((filter) => filter.includes(filters));
      }
    });
  };

  return { filteredBenefits, handleFilter };
};
export { useFilters };
