import { PEOPLE_REST_API_URL } from "../global-variables.js";

export const getPeopleCount = async () => {
  const res = await fetch(`${PEOPLE_REST_API_URL}`);
  const peopleFromApi = await res.json();

  return peopleFromApi.length;
};

export const getAllPeople = async (root, args) => {
  const res = await fetch(`${PEOPLE_REST_API_URL}`);
  const peopleFromApi = await res.json();

  if (!args.filterPhone) {
    return peopleFromApi;
  }

  return peopleFromApi.filter((person) =>
    args.filterPhone === "YES" ? person.phone : !person.phone
  );
};

export const getPerson = async (root, args) => {
  const res = await fetch(`${PEOPLE_REST_API_URL}?name=${args.name}`);
  const person = await res.json();

  return person[0];
};
