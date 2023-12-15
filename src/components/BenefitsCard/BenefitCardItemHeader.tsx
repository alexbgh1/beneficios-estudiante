// Type
import { BenefitDetails } from "../../types/benefit.d.type";
// Components
import { GoToLinkIcon } from "../icons/index.tsx";

const BenefitCardItemHeader = ({ name, details }: { name: string; details: BenefitDetails }) => {
  return (
    <header className={`bg-[length:16px_16px] bg-no-repeat flex justify-between items-strech px-2 pt-2`}>
      <section className="w-full flex items-start justify-between bg-gradient-to-l from-transparent from-50% to-third/50 to-50% bg-[length:201%_100%] bg-right hover:bg-left transition-all duration-300">
        <a
          title={name}
          href={details.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-4/5 flex flex-row items-start p-2 pl-2"
        >
          <picture className="aspect-square place-self-center mb-1 w-10 h-10">
            <source srcSet={`${import.meta.env.VITE_API_BASE_PATH}${details.logo.webp}`} type="image/webp" />
            <source srcSet={`${import.meta.env.VITE_API_BASE_PATH}${details.logo.png}`} type="image/png" />
            <img
              src={`${import.meta.env.VITE_API_BASE_PATH}/images/benefits/logo-placeholder.png`}
              alt={name}
              className="aspect-square place-self-center mb-1 w-10 h-10"
            />
          </picture>
          <h3 className="ml-2 w-4/5 text-xl sm:text-2xl font-bold text-primary line-clamp-2">{name}</h3>
          <div>
            <GoToLinkIcon className="w-5 h-5 inline-block ml-1 fill-primary" />
          </div>
        </a>
      </section>
    </header>
  );
};

export default BenefitCardItemHeader;
