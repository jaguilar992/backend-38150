import mongoose from "mongoose";
import {MONGO_URI} from "../../config";

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URI);
}


export default () => main().catch(err => console.log(err));