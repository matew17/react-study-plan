import { useMutation } from "@apollo/client";

import { GET_ALL_PEOPLE } from "../queries";
import { DELETE_PERSON } from "../mutations";

export const useDeletePerson = () => {
  const [remove] = useMutation(DELETE_PERSON, {
    refetchQueries: [{ query: GET_ALL_PEOPLE }],
  });

  const deletePerson = (id: string) => {
    remove({ variables: { id } });
  };

  return { deletePerson };
};
