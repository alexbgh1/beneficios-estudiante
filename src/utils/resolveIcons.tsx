import React from "react";
import {
  CircleCheckIcon,
  CircleXMarkIcon,
  CircleQuestionIcon,
  RepeatIcon,
  GraduationCapIcon,
} from "../components/icons";
import { Tested, BenefitLimitMaxTimeType } from "../types/benefit.d.type";

const resolveTestedIcon = (tested: Tested, className: string): React.ReactNode => {
  switch (tested) {
    case "passed":
      return <CircleCheckIcon className={`fill-green-500 ${className}`} />;
    case "not-passed":
      return <CircleXMarkIcon className={`fill-red-500 ${className}`} />;
    case "unknown":
      return <CircleQuestionIcon className={`fill-yellow-500 ${className}`} />;
    default:
      return <CircleQuestionIcon className={`fill-yellow-500 ${className}`} />;
  }
};

const resolveLimitsIcon = (type: BenefitLimitMaxTimeType, className: string): React.ReactNode => {
  switch (type) {
    case "fixed":
      return <RepeatIcon className={`fill-gray-500 ${className}`} />;
    case "student":
      return <GraduationCapIcon className={`fill-gray-500 ${className}`} />;
    case "unknown":
      return <CircleQuestionIcon className={`fill-yellow-500 ${className}`} />;
    default:
      return <CircleQuestionIcon className={`fill-yellow-500 ${className}`} />;
  }
};

const resolveRenewalIcon = (renewal: boolean, className: string): React.ReactNode => {
  if (renewal) return <RepeatIcon className={`fill-gray-500 ${className}`} />;
  return null;
};

export { resolveTestedIcon, resolveLimitsIcon, resolveRenewalIcon };
