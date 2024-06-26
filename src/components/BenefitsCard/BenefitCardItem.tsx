import { motion } from "framer-motion";
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
    <motion.div layout>
      <article
        className="before:w-full min-w-[240px] max-w-[350px] h-full
      before:h-full before:absolute before:z-[-1] before:opacity-50 before:transition-all before:duration-300 before:transform before:hover:transform
      before:hover:skew-y-[1deg] before:hover:scale-105 before:hover:shadow-md before:hover:border-gray-400 before:bg-card/40 before:border
    before:border-gray-300 before:rounded-md before:shadow-sm 
    transition-all duration-300 transform
    hover:transform hover:skew-y-[1deg] hover:scale-105 hover:shadow-md hover:border-gray-400
    bg-opacity-50 bg-card border border-gray-300 rounded-md shadow-sm"
      >
        {/* Header */}
        <BenefitCardItemHeader name={name} details={details} />
        {/* Body */}
        <BenefitCardItemBody details={details} testing={testing} limits={limits} />
        {/* Footer */}
        <BenefitCardItemFooter aliases={aliases} />
      </article>
    </motion.div>
  );
};

export default BenefitsCardItem;
