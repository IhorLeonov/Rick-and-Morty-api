import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./constants/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
              <GlobalStyle />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
