interface theme {
    color: {
      primary: string;
      dark: string;
      purple: string;
      red: string;
      green: string;
      yellow: string;
    };
    font: {
      family: {
        headings: string;
        paragraphs: string;
        buttons: string;
        links: string;
      };
      size: {
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
      primary: "#003940",
      dark: "#161616",
      purple: "#5F2B99",
      red: "#A82608",
      green: "#97E650",
      yellow: "#FFBC4A",
    },
    font: {
      family: {
        headings: "Tinos, Georgia, Garmond",
        paragraphs: "'Open Sans', Verdana, Arial",
        buttons: "'Open Sans', Verdana, Arial",
        links: "'Open Sans', Verdana, Arial",
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