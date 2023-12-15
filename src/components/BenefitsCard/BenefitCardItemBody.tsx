// Type
import { BenefitDetails, BenefitTesting, BenefitLimits } from "../../types/benefit.d.type";
// Utils
import { resolveTestedIcon, resolveLimitsIcon, resolveRenewalIcon } from "../../utils/resolveIcons.tsx";
import { resolveTimeNumberDate } from "../../utils/resolveTime.tsx";

const BenefitCardItemBody = ({
  details,
  testing,
  limits,
}: {
  details: BenefitDetails;
  testing: BenefitTesting;
  limits: BenefitLimits;
}) => {
  const { max_time_benefit } = limits;
  const limitsIcon = resolveLimitsIcon(max_time_benefit.type, "w-5 h-5 fill-primary");
  const renewalIcon = resolveRenewalIcon(max_time_benefit.renewal, "ml-2 w-5 h-5 fill-primary");

  const isTestedIcon = resolveTestedIcon(testing.status, "w-5 h-5 bg-white rounded-full");

  return (
    <>
      {/* BODY: TESTED */}
      <section className="px-2 py-2">
        {isTestedIcon && (
          <div className="px-2 pt-2 pb-1 flex flex-row items-center gap-2">
            <p className="text-xs text-primary font-bold">{testing.last_tested_date}</p>
            <span
              className="block rounded-full transition-all duration-300"
              title={`${testing.status.toUpperCase()} | Última actualización: ${testing.last_tested_date}`}
            >
              {isTestedIcon}
            </span>
          </div>
        )}
        <p className="px-2 text-sm text-primary">{details.description}</p>
      </section>
      {/* BODY: LIMITS */}
      <div className="flex justify-between px-2 py-2">
        <section>
          <h4 className="px-2 text-sm font-bold text-primary">Límites</h4>
          <ul className="flex flex-row justify-between px-2 py-2">
            <li className="flex items-center gap-2">
              {limitsIcon}
              <span className="text-xs text-primary capitalize">{max_time_benefit.type}</span>
              {/* #060505 */}
              {/* Renewal: boolean */}
              {max_time_benefit.renewal && renewalIcon}
              <span className="text-xs text-primary capitalize">
                {max_time_benefit.duration.value}{" "}
                {resolveTimeNumberDate(max_time_benefit.duration.value, max_time_benefit.duration.unit)}
              </span>
            </li>
          </ul>
        </section>
        {/* BODY: CREDITS */}
        <section>
          {limits.credits.type && (
            <h4 className="capitalize px-2 text-sm font-bold text-primary">{limits.credits.type}</h4>
          )}
          <ul className="flex flex-row justify-between px-2 py-2">
            {limits.credits.type && (
              <li className="flex flex-col items-center gap-2">
                <span className="text-sm text-primary">${limits.credits.value}</span>
              </li>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};

export default BenefitCardItemBody;
