import React from "react";
import { CircleCheckIcon, CircleXMarkIcon, CircleQuestionIcon } from "../components/icons";
import { Tested } from "../types/benefit.d.type";

const resolveIcon = (tested: Tested): React.ReactNode => {
  switch (tested) {
    case "passed":
      return <CircleCheckIcon className="fill-green-500" />;
    case "not-passed":
      return <CircleXMarkIcon className="fill-red-500" />;
    case "unknown":
      return <CircleQuestionIcon className="fill-yellow-500" />;
    default:
      return null; // You can handle other cases or return null as a default
  }
};

export { resolveIcon };
