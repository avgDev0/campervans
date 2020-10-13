import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: green[500],
        color: "rgb(255, 255, 255) !important",
      },
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
