interface theme {
  color: {
    darkPurple: string;
    darkBlue: string;
    darkGreen: string;
    teal: string;
    lightTeal: string;
    blue: string;
    purple: string;
    yellow: string;
    pink: string;
    light: string;
    dark: string;
  };
  font: {
    family: {
      heading: string;
      paragraph: string;
      button: string;
      textLink: string;
      navLink: string;
    };
    size: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    };
    weight: {
      thin: string;
      regular: string;
      semiBold: string;
      bold: string;
    };
  };
  screen: {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
}

export const theme = {
  color: {
    darkPurple: "#1E0730",
    darkBlue: "#1C173B",
    darkGreen: "#10626C",
    teal: "#00C9B0",
    lightTeal: "#B5F0E8",
    blue: "#94B8D6",
    purple: "#BAB3DF",
    yellow: "#FFFADE",
    pink: "#EDE2F5",
    light: "#fff",
    dark: "#000",
  },
  font: {
    family: {
      heading: "Teko",
      paragraph: "IBM Plex Sans Condensed",
      title: "PT Sans",
      textLink: "IBM Plex Sans Condensed",
      navLink: "PT Sans",
    },
    size: {
      small: "1rem",
      medium: "1.3rem",
      large: "1.75rem",
      xLarge: "2.3rem",
      xxLarge: "3.1rem",
    },
    weight: {
      thin: "300",
      regular: "400",
      semiBold: "600",
      bold: "700",
    },
  },
  screen: {
    small: "500px",
    medium: "800px",
    large: "1080px",
    xLarge: "1400px",
  },
};
