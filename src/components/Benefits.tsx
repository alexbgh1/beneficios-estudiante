import { useState, useEffect } from "react";
// Types
import { Benefit } from "../types/benefit.d.type";
// Components
import BenefitsCardItem from "./BenefitsCard/BenefitCardItem";

const Benefits = ({ filteredBenefits }) => {
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
    <div className="w-full">
      <div className="mx-4 sm:mx-8 mt-6 sm:mt-8 justify-items-center grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {filteredBenefits(benefits).map((benefit: Benefit) => {
          return <BenefitsCardItem benefit={benefit} key={benefit.id} />;
        })}
      </div>
    </div>
  );
};

export default Benefits;
