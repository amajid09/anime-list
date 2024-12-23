import mongoose from "mongoose";
//define the structure of the documents that going to be stored in collection
const Schema = mongoose.Schema;
const animeScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Anime = mongoose.model("anime", animeScheme);


export default Anime;