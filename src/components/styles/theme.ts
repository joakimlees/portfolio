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
      title: string;
      textLink: string;
      navLink: string;
    };
    size: {
      xxSmall: string;
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      xxxLarge: string;
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
      heading: "Teko, 'Trebuchet MS', Helvetica, Verdana, Arial",
      paragraph:
        "'IBM Plex Sans Condensed', Verdana, Arial, Helvetica, 'Trebuchet MS'",
      title: "'PT Sans', Verdana, Arial, Helvetica, 'Trebuchet MS'",
      textLink:
        "'IBM Plex Sans Condensed', Verdana, Arial, Helvetica, 'Trebuchet MS'",
      navLink: "'PT Sans', 'Trebuchet MS', Helvetica, Verdana, Arial",
    },
    size: {
      xxSmall: "0.75rem", // 12px
      xSmall: "1rem", // 16px
      small: "1.125rem", // 18px
      medium: "1.313rem", // 21px
      large: "1.75rem", // 28px
      xLarge: "2.313rem", // 37px
      xxLarge: "3.125rem", // 50px
      xxxLarge: "4.88rem", // 67px
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
