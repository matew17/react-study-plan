import mongoose from "mongoose";

const MONGODB_URI = `mongodb://localhost:27017/graphql-course`;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((e) => {
    console.error("DB Connection error:", e.message);
  });
