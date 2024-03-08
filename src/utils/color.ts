import { Rgb, Hex } from "../types/color.d.type";

const hexToRgb = (hex: Hex): Rgb => {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return { r, g, b };
};

const darkenColor = (color: Rgb, factor: number = 0.8): Rgb => {
  const r = Math.floor(color.r * factor);
  const g = Math.floor(color.g * factor);
  const b = Math.floor(color.b * factor);
  return { r, g, b };
};

const styleColorRgb = (color: Rgb): string => {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};

export { hexToRgb, darkenColor, styleColorRgb };
