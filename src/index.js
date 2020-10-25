import React from "react";
import ReactDOM from "react-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { mainAppTheme } from "themes";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme(mainAppTheme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
