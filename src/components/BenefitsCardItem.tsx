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
    <article className="bg-third/30 w-80 border border-gray-300 rounded-md shadow-sm">
      {/* Header */}
      <BenefitsCardItemHeader name={name} details={details} testing={testing} />
      {/* Body */}
      <BenefitsCardItemBody details={details} />
      {/* Footer */}
      <BenefitsCardItemFooter limits={limits} />
    </article>
  );
};

const BenefitsCardItemFooter = ({ limits }: { limits: BenefitLimits }) => {
  const { max_time_benefit } = limits;
  const limitsIcon = resolveLimitsIcon(max_time_benefit.type, "w-5 h-5 fill-gray-500");
  const renewalIcon = resolveRenewalIcon(max_time_benefit.renewal, "ml-2 w-5 h-5 fill-gray-500");
  return (
    <footer className="px-2 py-2">
      <h4 className="px-2 text-sm font-bold text-gray-800">Límites</h4>
      <ul className="flex flex-row justify-between px-2 py-2">
        <li className="flex items-center gap-2">
          {limitsIcon}
          <span className="text-xs text-gray-700 capitalize">{max_time_benefit.type}</span>
          {/* Renewal: boolean */}
          {max_time_benefit.renewal && renewalIcon}
          <span className="text-xs text-gray-700 capitalize">
            {max_time_benefit.duration.value}{" "}
            {resolveTimeNumberDate(max_time_benefit.duration.value, max_time_benefit.duration.unit)}
          </span>
        </li>

        {/* // TODO: Credits */}
        {/* {credits.type && (
          <li className="flex items-center gap-2">
            <span className="text-sm text-gray-700">${credits.type}</span>
          </li>
        )} */}
      </ul>
    </footer>
  );
};

const BenefitsCardItemBody = ({ details }: { details: BenefitDetails }) => {
  return (
    <section className="px-2 py-2">
      <p className="px-2 text-sm text-gray-700">{details.description}</p>
    </section>
  );
};

const BenefitsCardItemHeader = ({
  name,
  details,
  testing,
}: {
  name: string;
  details: BenefitDetails;
  testing: BenefitTesting;
}) => {
  const isTestedIcon = resolveTestedIcon(testing.status, "w-5 h-5");
  return (
    <header className={`flex justify-between items-strech px-4 py-2 bg-[url(${details.logo})] bg-cover bg-center`}>
      <section className="w-full flex items-baseline">
        {/* <img src={details.logo} alt={name} className="w-10 h-10 rounded-full" /> */}
        <a
          href={details.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-row items-strech p-2 pl-0 bg-gradient-to-l from-transparent from-50% to-third/50 to-50% bg-[length:201%_100%] bg-right hover:bg-left transition-all  duration-300"
        >
          <h3 className="w-4/5 text-xl sm:text-2xl font-bold text-gray-800">{name} </h3>
          <div className="w-1/5">
            <GoToLinkIcon className="w-5 h-5 inline-block ml-1" />
          </div>
        </a>
      </section>
      {/* isTestedIcon */}
      {isTestedIcon && (
        <div className="p-2">
          <span
            className="block border border-primary/50 hover:border-primary rounded-full p-0.5 transition-all duration-300"
            title={`${testing.status.toUpperCase()} | Última actualización: ${testing.last_tested_date}`}
          >
            {isTestedIcon}
          </span>
        </div>
      )}
    </header>
  );
};

export default BenefitsCardItem;
