import PersonModel from "../models/person.js";

export const getPeopleCount = async () => {
  return PersonModel.collection.countDocuments();
};

export const getAllPeople = async (root, args) => {
  if (!args.filterPhone) {
    return PersonModel.find();
  }

  return PersonModel.find({ phone: { $exists: args.filterPhone === "YES" } });
};

export const getPerson = async (root, args) => {
  return PersonModel.findOne({ name: args.name });
};
