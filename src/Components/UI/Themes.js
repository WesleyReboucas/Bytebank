import {
  backgroundLight,
  contentLight,
  textBackgroundLight,
  BackgroundDark,
  contentDark,
  textBackgroundDark,
} from "./Variables";

export const ThemeLight = {
  body: backgroundLight,
  inside: contentLight,
  text: textBackgroundLight,
  filter: "",
};

export const ThemeDark = {
  body: BackgroundDark,
  inside: contentDark,
  text: textBackgroundDark,
  filter: "invert(100%)",
};
