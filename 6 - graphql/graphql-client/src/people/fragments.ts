import { gql } from "@apollo/client";

const ALL_PEOPLE_INFO_FRAGMENT = gql`
  fragment AllPeopleInfo on Person {
    id
    name
    phone
    address {
      street
      city
    }
  }
`;

export { ALL_PEOPLE_INFO_FRAGMENT };
