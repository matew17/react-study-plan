import { ApolloClient, InMemoryCache } from "@apollo/client";

const getBearer = () => {
  const token = localStorage.getItem("graphql-user");

  return token ? `Bearer ${token}` : "";
};

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  headers: {
    authorization: getBearer(),
  },
});
