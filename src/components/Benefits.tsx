import { useState, useEffect } from "react";
// Types
import { Benefit } from "../types/benefit.d.type";
// Components
import BenefitsCardItem from "./BenefitsCardItem";

const Benefits = () => {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  useEffect(() => {
    const fetchBenefits = async () => {
      const response = await fetch("/data/benefits.json");
      const data = await response.json();
      setBenefits(data);
    };
    fetchBenefits();
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {benefits.map((benefit) => {
        return <BenefitsCardItem benefit={benefit} key={benefit.id} />;
      })}
    </div>
  );
};

export default Benefits;
