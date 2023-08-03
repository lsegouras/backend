import mongoose from "mongoose";

const csvSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

export default mongoose.model("csv", csvSchema);
