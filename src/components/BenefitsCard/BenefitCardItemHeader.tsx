// Type
import { BenefitDetails } from "../../types/benefit.d.type";
// Components
import { GoToLinkIcon } from "../icons/index.tsx";

const BenefitCardItemHeader = ({ name, details }: { name: string; details: BenefitDetails }) => {
  return (
    <header className={`bg-[length:16px_16px] bg-no-repeat flex justify-between items-strech px-2 pt-2`}>
      <section className="w-full flex items-start justify-between bg-gradient-to-l from-transparent from-50% to-accent/[.15] to-50% bg-[length:201%_100%] bg-right hover:bg-left transition-all duration-[250ms]">
        <a
          title={name}
          href={details.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-start flex-1 w-4/5 p-2 pl-2"
        >
          <picture className="w-10 h-10 mb-1 aspect-square place-self-center">
            <source srcSet={`${import.meta.env.VITE_API_BASE_PATH}${details.logo.webp}`} type="image/webp" />
            <source srcSet={`${import.meta.env.VITE_API_BASE_PATH}${details.logo.png}`} type="image/png" />
            <img
              src={`${import.meta.env.VITE_API_BASE_PATH}/images/benefits/logo-placeholder.png`}
              alt={`Empresa que ofrece beneficios estudiantiles ${name}`}
              className="w-10 h-10 mb-1 aspect-square place-self-center"
            />
          </picture>
          <h3 className="w-4/5 ml-2 text-xl font-bold sm:text-2xl text-primary line-clamp-2">{name}</h3>
          <div>
            <GoToLinkIcon className="inline-block w-5 h-5 ml-1 fill-primary" />
          </div>
        </a>
      </section>
    </header>
  );
};

export default BenefitCardItemHeader;
