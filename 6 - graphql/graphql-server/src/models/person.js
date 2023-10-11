import { Schema, model } from "mongoose";

import uniqueValidator from "mongoose-unique-validator";

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  phone: {
    type: String,
    minLength: 5,
  },
  street: {
    type: String,
    required: true,
    minLength: 5,
  },
  city: {
    type: String,
    required: true,
    minLength: 3,
  },
});

schema.plugin(uniqueValidator);

export default model("Person", schema);
