import { Theme } from "../types/theme.d.type";

// Si se agrega un nuevo tema, se debe agregar también en src/utils/themeHelpers.tsx
const themes: Theme[] = [
  {
    id: 1,
    name: "Coffee",
    value: "coffee",
  },
  {
    id: 3,
    name: "Winter",
    value: "winter",
  },
  {
    id: 5,
    name: "Halloween",
    value: "halloween",
  },
  {
    id: 98,
    name: "Light",
    value: "light",
  },
  {
    id: 99,
    name: "Dark",
    value: "dark",
  },
];

export { themes };
