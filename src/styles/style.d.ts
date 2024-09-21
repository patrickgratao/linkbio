import "styled-components";

declare module "styled-components" {
  type Sizes = {
    xxl?: string;
    xl?: string;
    lg?: string;
    md?: string;
    sm?: string;
    xs?: string;
  };

  type StylesCompound = {
    background: string;
    text: string;
    border: string;

    hover: {
      background: string;
      text: string;
      border: string;
    };
  };

  type StylesBasic = {
    primary: string;
    secondary: string;
    tertiary: string;
  };

  export interface DefaultTheme {
    fontFamily: string;
    borderRadius: {
      full: string;
      lg: string;
      md: string;
      sm: string;
    };

    colors: {
      white: string;
      black: string;
    };

    fontSize: sizes;

    lineHeight: sizes;

    spacing: size;

    padding: size;

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };

    charts?: {
      colors: StylesBasic;
    };
  }
}
