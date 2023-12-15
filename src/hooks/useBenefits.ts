import { useState, useEffect } from "react";
// Types
import { Benefit } from "../types/benefit.d.type";

const useBenefits = () => {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  console.log;
  useEffect(() => {
    const fetchBenefits = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_PATH}/data/benefits.json`);
      const data = await response.json();
      setBenefits(data);
    };
    fetchBenefits();
  }, []);

  return { benefits };
};

export { useBenefits };
