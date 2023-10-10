import { useState } from "react";

import { useMutation } from "@apollo/client";

import { CREATE_PERSON } from "../mutations";
import { GET_ALL_PEOPLE } from "../queries";

export const useCreatePerson = () => {
  const [error, setError] = useState<string | null>(null);

  const [add] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: GET_ALL_PEOPLE }],
    onError: (e) => {
      const error = e.graphQLErrors[0];

      setError(error?.message ?? "Error when storing the data");

      setTimeout(() => {
        setError(null);
      }, 2000);
    },
  });

  const addPerson = ({
    name,
    city,
    street,
    phone,
  }: {
    name: string;
    city: string;
    street: string;
    phone: string;
  }) => {
    add({
      variables: {
        name,
        city,
        street,
        phone,
      },
    });
  };

  return { addPerson, error };
};
