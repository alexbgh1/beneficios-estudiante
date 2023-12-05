// Types
import { Benefit } from "../types/benefit.d.type";
import { resolveIcon } from "../utils";

const BenefitsCardItem = ({ benefit }: { benefit: Benefit }) => {
  const { id, name, testing } = benefit;
  console.log("tested", testing.status);
  const icon = resolveIcon(testing.status);
  return (
    <article className="bg-third/30 w-48 border border-gray-200 rounded-md shadow-sm">
      {/* Header */}
      <header className="flex justify-between items-center px-2 py-2 gap-4">
        <section className="flex items-baseline">
          <h3 className="text-xl font-bold text-gray-800">{name} </h3>
          <span className="ml-1 text-sm text-gray-600">#{id}</span>
        </section>
        {/* Icon */}
        {icon && <span className="w-4 h-4">{icon}</span>}
      </header>
    </article>
  );
};

export default BenefitsCardItem;
