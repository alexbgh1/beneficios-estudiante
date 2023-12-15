// Types
import { Benefit } from "../../types/benefit.d.type";
// Components
import BenefitCardItemHeader from "./BenefitCardItemHeader.tsx";
import BenefitCardItemBody from "./BenefitCardItemBody.tsx";
import BenefitCardItemFooter from "./BenefitCardItemFooter.tsx";

const BenefitsCardItem = ({ benefit }: { benefit: Benefit }) => {
  const { name, details, testing, limits } = benefit;
  const { aliases } = details;

  return (
    <article className="before:w-full min-w-[240px] max-w-[350px] before:h-full before:absolute before:z-[-1] before:opacity-50 before:transition-all before:duration-300 before:transform before:hover:transform before:hover:skew-y-[1deg] before:hover:scale-105 before:hover:shadow-md before:hover:border-gray-400 before:bg-third/40 before:border before:border-gray-300 before:rounded-md before:shadow-sm bg-opacity-50 transition-all duration-300 transform hover:transform hover:skew-y-[1deg] hover:scale-105 hover:shadow-md hover:border-gray-400 bg-third border border-gray-300 rounded-md shadow-sm">
      {/* Header */}
      <BenefitCardItemHeader name={name} details={details} />
      {/* Body */}
      <BenefitCardItemBody details={details} testing={testing} limits={limits} />
      {/* Footer */}
      <BenefitCardItemFooter aliases={aliases} />
    </article>
  );
};

export default BenefitsCardItem;
