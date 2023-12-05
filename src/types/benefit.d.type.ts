type Tested = "passed" | "not-passed" | "unknown";

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
type DurationUnit = "days" | "months" | "years";
interface BenefitLimits {
  max_time_benefit: {
    type: "student" | "fixed" | "unknown";
    duration: {
      value: number;
      unit: DurationUnit;
    };
  };
  credits: {
    type: "hours" | "credits" | "unknown";
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

export { Benefit, Tested };
