import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./store/Theme.context";
import PropTypes from "prop-types";
import { store } from "../src/store/store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

root.render(
  <Providers>
    <App />
  </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
