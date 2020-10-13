import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    text: {
      primary: "rgb(255, 255, 255) !important",
    },
  },
  typography: {
    button: {
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
