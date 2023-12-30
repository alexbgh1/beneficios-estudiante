import { Benefit } from "../types/benefit.d.type";
type FilterFunction = (benefits: Benefit[]) => Benefit[];
type HandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => void;

export { FilterFunction, HandleFilter };
