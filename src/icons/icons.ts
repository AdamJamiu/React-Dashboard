export type IconsId =
  | "bell"
  | "brand-apple"
  | "calculator"
  | "calendar-alt"
  | "chevron-down"
  | "chevron-right"
  | "eye-open"
  | "flame"
  | "indicator-arrow"
  | "magnifier"
  | "moon"
  | "padlock"
  | "Scan-QR"
  | "star-empty"
  | "star"
  | "trash"
  | "triangle-inverted"
  | "triangle";

export type IconsKey =
  | "Bell"
  | "BrandApple"
  | "Calculator"
  | "CalendarAlt"
  | "ChevronDown"
  | "ChevronRight"
  | "EyeOpen"
  | "Flame"
  | "IndicatorArrow"
  | "Magnifier"
  | "Moon"
  | "Padlock"
  | "ScanQr"
  | "StarEmpty"
  | "Star"
  | "Trash"
  | "TriangleInverted"
  | "Triangle";

export enum Icons {
  Bell = "bell",
  BrandApple = "brand-apple",
  Calculator = "calculator",
  CalendarAlt = "calendar-alt",
  ChevronDown = "chevron-down",
  ChevronRight = "chevron-right",
  EyeOpen = "eye-open",
  Flame = "flame",
  IndicatorArrow = "indicator-arrow",
  Magnifier = "magnifier",
  Moon = "moon",
  Padlock = "padlock",
  ScanQr = "Scan-QR",
  StarEmpty = "star-empty",
  Star = "star",
  Trash = "trash",
  TriangleInverted = "triangle-inverted",
  Triangle = "triangle",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bell]: "61697",
  [Icons.BrandApple]: "61698",
  [Icons.Calculator]: "61699",
  [Icons.CalendarAlt]: "61700",
  [Icons.ChevronDown]: "61701",
  [Icons.ChevronRight]: "61702",
  [Icons.EyeOpen]: "61703",
  [Icons.Flame]: "61704",
  [Icons.IndicatorArrow]: "61705",
  [Icons.Magnifier]: "61706",
  [Icons.Moon]: "61707",
  [Icons.Padlock]: "61708",
  [Icons.ScanQr]: "61709",
  [Icons.StarEmpty]: "61710",
  [Icons.Star]: "61711",
  [Icons.Trash]: "61712",
  [Icons.TriangleInverted]: "61713",
  [Icons.Triangle]: "61714",
};
