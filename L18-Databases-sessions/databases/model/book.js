import mongoose, { Schema } from "mongoose";

const bookSchema = Schema({
    name: String,
    year: { type: Number },
    author_id: { type: Schema.Types.ObjectId, ref: "Person", required: true }
});


export default mongoose.model('Book', bookSchema);