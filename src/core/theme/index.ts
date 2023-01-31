import { createTheme } from "@mui/material";
import blue from "@mui/material/colors/blue";

declare module "@mui/material/styles" {
  interface Palette {
    yellow: Palette["primary"];
    red: Palette["primary"];
    green: Palette["primary"];
  }
  interface PaletteOptions {
    yellow: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    yellow: true;
    red: true;
    green: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DC143C",
    },
    yellow: {
      main: "#B7943D",
      contrastText: "#fff",
    },
    red: {
      main: "#B73D3D",
    },
    green: {
      main: "#3DB73D",
    }
  },
});
