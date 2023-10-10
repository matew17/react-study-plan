import { ApolloServer, gql } from "apollo-server";

import {
  getPeopleCount,
  getAllPeople,
  getPerson,
} from "./queries/people-queries.js";
import { createPerson, deletePerson } from "./mutations/people.mutations.js";

const typeDefs = gql`
  enum hasPhone {
    YES
    NO
  }

  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    peopleCount: Int!
    allPeople(filterPhone: hasPhone): [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person

    deletePerson(id: String!): Person
  }
`;

const resolvers = {
  Query: {
    peopleCount: getPeopleCount,
    allPeople: getAllPeople,
    findPerson: getPerson,
  },
  Mutation: {
    addPerson: createPerson,
    deletePerson: deletePerson,
  },
  Person: {
    address: (root) => ({ city: root.city, street: root.street }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server listing at:  ${url}`));
