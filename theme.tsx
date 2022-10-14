import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.white};
    }

    main {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts[0]};
    }

`;

export const theme: DefaultTheme = {
  colors: {
    black: "#21242B",
    coal: "#3E3E3E",
    blue: "#1DA1F2",
    grey: "#CFCFCF",
    white: "#FFFFFF",
  },
  fonts: ["roboto"],
  fontSizes: {
    xl: "3.125em", // 50px
    lg: "2.8125em", // 45px
    md: "2.1875em", // 35px
    sm: "1.4375em", // 23px
    xs: "1.25em", // 20px
    xxs: "1em", // 16px
  },
};

export default GlobalStyles;
