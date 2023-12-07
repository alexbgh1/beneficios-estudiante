type Tested = "passed" | "not-passed" | "unknown";
type BenefitLimitMaxTimeType = "student" | "fixed" | "unknown";
type BenefitLimitCreditsType = "hours" | "credits" | "unknown" | null;
type DurationUnit = "days" | "months" | "years";

// Estado de la prueba del beneficio, si sigue o no disponible el beneficio
interface BenefitTesting {
  status: Tested;
  last_tested_date: string;
}

// Detalles del beneficio, descripción, url, logo, alias
interface BenefitDetails {
  description: string;
  url: string;
  logo: string;
  aliases: string[]; // -> para búsqueda
}

// Duración del beneficio, ejemplo:
// Tiempo máximo "student" -> 1 año; mientras sea estudiante
// Créditos "credits" -> 100 créditos (u horas) según el servicio
interface BenefitLimits {
  max_time_benefit: {
    type: BenefitLimitMaxTimeType;
    duration: {
      value: number | null;
      unit: DurationUnit;
    };
    renewal: boolean;
  };
  credits: {
    type: BenefitLimitCreditsType;
    value: number;
  };
}

interface Benefit {
  id: number;
  name: string;
  details: BenefitDetails;
  testing: BenefitTesting;
  limits: BenefitLimits;
}
export {
  Benefit,
  BenefitDetails,
  BenefitTesting,
  BenefitLimits,
  BenefitLimitMaxTimeType,
  BenefitLimitCreditsType,
  Tested,
};
