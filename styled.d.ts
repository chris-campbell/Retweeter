import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      coal: string;
      blue: string;
      grey: string;
      white: string;
    };
    fonts: Array;
    fontSizes: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
      xxs: string;
    };
  }
}
