import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const getBearer = () => {
  const token = localStorage.getItem("graphql-user");

  return token ? `Bearer ${token}` : "";
};

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const token = getBearer(); // get token from any place

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
