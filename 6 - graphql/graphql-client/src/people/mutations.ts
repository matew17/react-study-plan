import { gql } from "@apollo/client";
import { ALL_PEOPLE_INFO_FRAGMENT } from "./fragments";

const CREATE_PERSON = gql`
  mutation ($name: String!, $city: String!, $street: String!, $phone: String) {
    addPerson(name: $name, city: $city, street: $street, phone: $phone) {
      ...AllPeopleInfo
    }
  }
  ${ALL_PEOPLE_INFO_FRAGMENT}
`;

const DELETE_PERSON = gql`
  mutation ($id: String!) {
    deletePerson(id: $id) {
      ...AllPeopleInfo
    }
  }
  ${ALL_PEOPLE_INFO_FRAGMENT}
`;

export { CREATE_PERSON, DELETE_PERSON };
