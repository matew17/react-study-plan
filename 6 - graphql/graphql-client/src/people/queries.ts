import { gql } from "@apollo/client";
import { ALL_PEOPLE_INFO_FRAGMENT } from "./fragments";

const GET_ALL_PEOPLE = gql`
  query {
    allPeople {
      id
      name
    }
  }
`;

// ...AllPeopleInfo is coming from the fragment
const GET_PERSON_BY_NAME = gql`
  query ($name: String!) {
    findPerson(name: $name) {
      ...AllPeopleInfo
    }
  }

  ${ALL_PEOPLE_INFO_FRAGMENT}
`;

export { GET_ALL_PEOPLE, GET_PERSON_BY_NAME };
