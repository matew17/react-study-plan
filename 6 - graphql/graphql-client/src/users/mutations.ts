import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;

const ADD_FRIEND = gql`
  mutation ($name: String!) {
    addAFriend(name: $name) {
      id
      username
      friends {
        name
        phone
        id
        address {
          city
          street
        }
      }
    }
  }
`;

export { LOGIN, ADD_FRIEND };
