import { AuthenticationError, UserInputError } from "apollo-server";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../global.js";
import UserModel from "../models/user.js";
import PersonModel from "../models/person.js";

export const createUser = async (root, args) => {
  const user = new UserModel({ username: args.username });

  try {
    await user.save();
  } catch (error) {
    throw new UserInputError(error.message, {
      invalidArgs: args,
    });
  }

  return user;
};

export const login = async (root, args) => {
  const user = await UserModel.findOne({ username: args.username });

  if (!user || args.password !== "secret") {
    throw new UserInputError("Wrong credentials.");
  }

  const userToken = {
    username: user.username,
    id: user._id,
  };

  return {
    value: jwt.sign(userToken, JWT_SECRET),
  };
};

export const me = (root, args, context) => context.currentUser;

export const addAFriend = async (root, args, context) => {
  const { currentUser } = context;

  if (!currentUser) {
    throw new AuthenticationError("Not authenticated");
  }

  const person = await PersonModel.findOne({ name: args.name });

  if (!person) {
    throw new UserInputError("The friend you are tyring to add doesn't exist");
  }

  const alreadyAFriend = currentUser.friends.find(
    (friend) => friend.id === person.id
  );

  if (alreadyAFriend) {
    return currentUser;
  }

  currentUser.friends = [...currentUser.friends, person];

  return currentUser.save();
};
