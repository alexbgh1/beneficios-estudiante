import { useState, useEffect } from "react";
// Types
import { Benefit } from "../types/benefit.d.type";

const useBenefits = () => {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  useEffect(() => {
    const fetchBenefits = async () => {
      const response = await fetch("/data/benefits.json");
      const data = await response.json();
      setBenefits(data);
    };
    fetchBenefits();
  }, []);

  return { benefits };
};

export { useBenefits };
