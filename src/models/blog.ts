import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema({
  name: { type: String, required: true, unique: true },       
  slug: { type: String, required: true, unique: true },       
  description: { type: String },                            
});

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag", 
      },
    ],
    content: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    estimatedTimeToRead:{
      type: String, 
      require: true,
      default: "5 mins"
    }
  },
  {
    timestamps: true, 
  }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export const Tag = mongoose.models.Tag || mongoose.model("Tag", tagSchema);
