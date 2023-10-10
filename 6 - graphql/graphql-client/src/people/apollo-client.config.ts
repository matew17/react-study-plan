import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
