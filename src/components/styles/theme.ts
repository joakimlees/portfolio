interface theme {
  color: {
    primaryTeal: string;
    accentYellow: string;
    accentPink: string;
    primaryLight: string;
    primaryDark: string;
    altDark: string;
    cardBackground: string;
    secondaryGray: string;
    lightHover: string;
    darkHover: string;
    successGreen: string;
    warningYellow: string;
    errorRed: string;
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
    primaryTeal: "#00A896",
    accentYellow: "#F6C700",
    accentPink: "#E94E77",
    primaryLight: "#FAFAFA",
    primaryDark: "#1F1F1F",
    altDark: "#2A2A2A",
    cardBackground: "#2F2F2F",
    secondaryGray: "#4A4A4A",
    lightHover: "#E5E5E5",
    darkHover: "#3A3A3A",
    successGreen: "#28A745",
    warningYellow: "#FFC107",
    errorRed: "#DC3545",
  },
  font: {
    type: {
      heading: "'Barlow', 'Roboto', 'Work Sans', 'Poppins', sans-serif",
      body: "'Inter', 'Public Sans', 'Open Sans', 'Nunito Sans', sans-serif",
      title: "'Barlow', 'Roboto', 'Work Sans', 'Poppins', sans-serif",
      link: "'Inter', 'Public Sans', 'Open Sans', 'Nunito Sans', sans-serif",
      navLink: "'Inter', 'Public Sans', 'Open Sans', 'Nunito Sans', sans-serif",
      button: "'Inter', 'Public Sans', 'Open Sans', 'Nunito Sans', sans-serif",
      util: "'Inter', 'Public Sans', 'Open Sans', 'Nunito Sans', sans-serif",
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
      extraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
    style: {
      italic: "italic",
    },
  },
  screen: {
    small: "500px",
    medium: "800px",
    large: "1080px",
    xLarge: "1400px",
  },
};
