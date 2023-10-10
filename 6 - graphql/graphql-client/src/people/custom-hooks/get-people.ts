import { useQuery } from "@apollo/client";

import { GET_ALL_PEOPLE } from "../queries";

export const useGetPeople = () => {
  const result = useQuery(GET_ALL_PEOPLE);

  return result;
};
