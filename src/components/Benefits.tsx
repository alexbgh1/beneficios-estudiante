// Types
import { Benefit } from "../types/benefit.d.type";
// Components
import BenefitsCardItem from "./BenefitsCard/BenefitCardItem";

const Benefits = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <div className="w-full">
      <div className="mx-4 sm:mx-8 mt-6 sm:mt-8 justify-items-center grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {benefits.map((benefit: Benefit) => {
          return <BenefitsCardItem benefit={benefit} key={benefit.id} />;
        })}
      </div>
    </div>
  );
};

export default Benefits;
