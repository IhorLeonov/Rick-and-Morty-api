import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./constants/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
