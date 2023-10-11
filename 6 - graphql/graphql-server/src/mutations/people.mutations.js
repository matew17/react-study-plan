import { UserInputError } from "apollo-server";

import PersonModel from "../models/person.js";

export const createPerson = async (root, args) => {
  const person = new PersonModel({ ...args });

  try {
    await person.save();
  } catch (error) {
    throw new UserInputError(error.message, {
      invalidArgs: args,
    });
  }

  return person;
};

export const deletePerson = async (root, args) => {
  const person = PersonModel.findByIdAndDelete(args.id);

  if (!person) return;

  return person;
};
