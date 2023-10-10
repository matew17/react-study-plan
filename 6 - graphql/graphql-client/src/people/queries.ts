import { gql } from "@apollo/client";

const GET_ALL_PEOPLE = gql`
  query {
    allPeople {
      id
      name
    }
  }
`;

const GET_PERSON_BY_NAME = gql`
  query ($name: String!) {
    findPerson(name: $name) {
      id
      name
      address {
        street
        city
      }
      phone
    }
  }
`;

export { GET_ALL_PEOPLE, GET_PERSON_BY_NAME };
