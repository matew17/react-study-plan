import { v1 as uuid } from "uuid";
import { UserInputError } from "apollo-server";

import { PEOPLE_REST_API_URL } from "../global-variables.js";

export const createPerson = async (root, args) => {
  const res = await fetch(`${PEOPLE_REST_API_URL}?name=${args.name}`);
  const person = await res.json();

  if (person?.length) {
    return new UserInputError("Name must be unique", {
      invalidArgs: args.name,
    });
  }

  const newPerson = { ...args, id: uuid() };

  await fetch(PEOPLE_REST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  });

  return newPerson;
};

export const deletePerson = async (root, args) => {
  const result = await fetch(`${PEOPLE_REST_API_URL}/${args.id}`, {
    method: "DELETE",
  });

  console.log(await result.json());

  return null;
};
