import { DefaultTheme } from "styled-components";

export type Itheme = DefaultTheme & {
  dark: string;
  yellow: string;
  light_blue: string;
  dark_blue: string;
  orange: string;
  light_green: string;
  dark_green: string;
  bg?: string;
  fg?: string;
};

const theme: Itheme = {
  dark: "199, 55%, 15%",
  yellow: "51, 90%, 81%",
  light_blue: "201, 93%, 89%",
  dark_blue: "189, 100%, 16%",
  orange: "21, 100%, 72%",
  light_green: "120, 79%, 89%",
  dark_green: "160, 100%, 13%",
};

export default theme;
