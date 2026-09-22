import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";
import App from "./App";
import "./style.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </StrictMode>,
);
