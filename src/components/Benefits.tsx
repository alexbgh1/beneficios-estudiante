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
    <div className="w-full mx-8 mt-6 justify-items-center grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] lg:grid-cols-3 gap-6">
      {benefits.map((benefit) => {
        return <BenefitsCardItem benefit={benefit} key={benefit.id} />;
      })}
    </div>
  );
};

export default Benefits;
