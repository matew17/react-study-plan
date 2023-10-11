import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";

import "./index.css";

import { apolloClient } from "./apollo-client.config.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
