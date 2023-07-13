import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
  {
    name: String,
    email: String,
    value: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    cancer: String,
    date: String,
    therapy: String,
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

export default Form;