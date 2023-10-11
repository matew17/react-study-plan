import { ApolloServer, gql } from "apollo-server";
import jwt from "jsonwebtoken";

import UserModel from "./models/user.js";

import "./db.js";

import {
  getPeopleCount,
  getAllPeople,
  getPerson,
} from "./queries/people-queries.js";

import { createPerson, deletePerson } from "./mutations/people.mutations.js";
import {
  addAFriend,
  createUser,
  login,
  me,
} from "./mutations/user.mutations.js";
import { JWT_SECRET } from "./global.js";

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

  type User {
    username: String!
    friends: [Person]!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Query {
    peopleCount: Int!
    allPeople(filterPhone: hasPhone): [Person]!
    findPerson(name: String!): Person
    me: User
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person

    deletePerson(id: String!): Person

    createUser(username: String!): User

    login(username: String!, password: String!): Token

    addAFriend(name: String!): User
  }
`;

const resolvers = {
  Query: {
    peopleCount: getPeopleCount,
    allPeople: getAllPeople,
    findPerson: getPerson,
    me: me,
  },
  Mutation: {
    addPerson: createPerson,
    deletePerson: deletePerson,
    createUser: createUser,
    login: login,
    addAFriend: addAFriend,
  },
  Person: {
    address: (root) => ({ city: root.city, street: root.street }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const authHeader = req ? req.headers.authorization : null;

    if (authHeader && authHeader.toLocaleLowerCase().startsWith("bearer ")) {
      const token = authHeader.substring(7); // bearer // 7 chars
      const { id } = jwt.decode(token, JWT_SECRET);

      const currentUser = await UserModel.findById(id).populate("friends");
      return { currentUser };
    }
  },
});

server.listen().then(({ url }) => console.log(`Server listing at:  ${url}`));
