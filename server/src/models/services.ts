import mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  size: String,
  date: Date,
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  authentification: {
    password: { type: String, require: true, select: false },
    salt: { type: String, require: true },
    sessionToken: { type: String, require: true, select: false },
  },
});

export const UserModel = mongoose.model("User", userSchema);
