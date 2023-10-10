import { useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";

import { GET_PERSON_BY_NAME } from "../queries";
import { People } from "../types/people.type";

export const useGetPersonByName = () => {
  const [visiblePerson, setVisiblePerson] = useState<People | null>(null);

  const [getPersonApi, result] = useLazyQuery(GET_PERSON_BY_NAME);

  const getPerson = (name: string) => {
    // Get specific person from GraphQL API.
    // Result will change so that's why we use the useEffect

    getPersonApi({ variables: { name } });
  };

  useEffect(() => {
    if (result.data) {
      setVisiblePerson(result.data.findPerson);
    }
  }, [result]);

  return { getPerson, visiblePerson, setVisiblePerson };
};
