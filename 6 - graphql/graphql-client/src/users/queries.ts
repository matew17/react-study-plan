import { gql } from "@apollo/client";

const GET_ME = gql`
  query {
    me {
      id
      friends {
        name
        phone
        id
        address {
          city
          street
        }
      }
      username
    }
  }
`;

export { GET_ME };
