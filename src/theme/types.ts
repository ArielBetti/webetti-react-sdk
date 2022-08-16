export interface IWebettiTheme {
  colors: {
    background: string;
    neutral: {
      pure: string;
      1: string;
      2: string;
      3: string;
    };
    primary: string;
    secondary: string;
    feedback: {
      warning: string;
      error: string;
      success: string;
    };
  };
  font: {
    colors: {
      white: string;
      dark: string;
      contrast: string;
      inverse: string;
      pure: string;
      1: string;
      2: string;
      3: string;
    };
  };
  breakpoints: {
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    time: string;
    type: string;
  };
}
