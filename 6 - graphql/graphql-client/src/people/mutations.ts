import { gql } from "@apollo/client";

const CREATE_PERSON = gql`
  mutation ($name: String!, $city: String!, $street: String!, $phone: String) {
    addPerson(name: $name, city: $city, street: $street, phone: $phone) {
      id
      name
    }
  }
`;

const DELETE_PERSON = gql`
  mutation ($id: String!) {
    deletePerson(id: $id) {
      id
    }
  }
`;

export { CREATE_PERSON, DELETE_PERSON };
