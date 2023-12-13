// Types
import { Benefit, BenefitDetails, BenefitTesting, BenefitLimits } from "../types/benefit.d.type";
// Utils
import { resolveTestedIcon, resolveLimitsIcon, resolveRenewalIcon } from "../utils/resolveIcons";
import { resolveTimeNumberDate } from "../utils/resolveTime.tsx";
// Components
import { GoToLinkIcon } from "./icons";

const BenefitsCardItem = ({ benefit }: { benefit: Benefit }) => {
  const { name, details, testing, limits } = benefit;

  return (
    <article className="before:w-full  min-w-[240px] max-w-[350px] before:h-full before:absolute before:z-[-1] before:opacity-50 before:transition-all before:duration-300 before:transform before:hover:transform before:hover:skew-y-[1deg] before:hover:scale-105 before:hover:shadow-md before:hover:border-gray-400 before:bg-third/40 before:border before:border-gray-300 before:rounded-md before:shadow-sm bg-opacity-50 transition-all duration-300 transform hover:transform hover:skew-y-[1deg] hover:scale-105 hover:shadow-md hover:border-gray-400 bg-third/40 border border-gray-300 rounded-md shadow-sm">
      {/* Header */}
      <BenefitsCardItemHeader name={name} details={details} />
      {/* Body */}
      <BenefitsCardItemBody details={details} testing={testing} />
      {/* Footer */}
      <BenefitsCardItemFooter limits={limits} />
    </article>
  );
};

const BenefitsCardItemHeader = ({ name, details }: { name: string; details: BenefitDetails }) => {
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
            <source srcSet={details.logo.webp} type="image/webp" />
            <source srcSet={details.logo.png} type="image/png" />
            <img
              src="/images/benefits/logo-placeholder.png"
              alt={name}
              className="aspect-square place-self-center mb-1 w-10 h-10"
            />
          </picture>
          <h3 className="ml-2 w-4/5 text-xl sm:text-2xl font-bold text-gray-800 line-clamp-2">{name}</h3>
          <div>
            <GoToLinkIcon className="w-5 h-5 inline-block ml-1" />
          </div>
        </a>
      </section>
    </header>
  );
};

const BenefitsCardItemBody = ({ details, testing }: { details: BenefitDetails; testing: BenefitTesting }) => {
  const isTestedIcon = resolveTestedIcon(testing.status, "w-5 h-5 bg-white rounded-full");

  return (
    <section className="px-2 py-2">
      {isTestedIcon && (
        <div className="px-2 pt-2 pb-1 flex flex-row items-center gap-2">
          <p className="text-xs text-gray-800 font-bold">{testing.last_tested_date}</p>
          <span
            className="block rounded-full transition-all duration-300"
            title={`${testing.status.toUpperCase()} | Última actualización: ${testing.last_tested_date}`}
          >
            {isTestedIcon}
          </span>
        </div>
      )}
      <p className="px-2 text-sm text-gray-800">{details.description}</p>
    </section>
  );
};

const BenefitsCardItemFooter = ({ limits }: { limits: BenefitLimits }) => {
  const { max_time_benefit } = limits;
  const limitsIcon = resolveLimitsIcon(max_time_benefit.type, "w-5 h-5 fill-gray-500");
  const renewalIcon = resolveRenewalIcon(max_time_benefit.renewal, "ml-2 w-5 h-5 fill-gray-500");

  return (
    <footer className="flex justify-between px-2 py-2">
      <section>
        <h4 className="px-2 text-sm font-bold text-gray-800">Límites</h4>
        <ul className="flex flex-row justify-between px-2 py-2">
          <li className="flex items-center gap-2">
            {limitsIcon}
            <span className="text-xs text-gray-800 capitalize">{max_time_benefit.type}</span>
            {/* #060505 */}
            {/* Renewal: boolean */}
            {max_time_benefit.renewal && renewalIcon}
            <span className="text-xs text-gray-800 capitalize">
              {max_time_benefit.duration.value}{" "}
              {resolveTimeNumberDate(max_time_benefit.duration.value, max_time_benefit.duration.unit)}
            </span>
          </li>
        </ul>
      </section>
      {/* // TODO: Credits */}
      <section>
        {limits.credits.type && (
          <h4 className="capitalize px-2 text-sm font-bold text-gray-800">{limits.credits.type}</h4>
        )}
        <ul className="flex flex-row justify-between px-2 py-2">
          {limits.credits.type && (
            <li className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-800">${limits.credits.value}</span>
            </li>
          )}
        </ul>
      </section>
    </footer>
  );
};

export default BenefitsCardItem;
