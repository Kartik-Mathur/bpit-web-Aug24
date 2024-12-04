import mongoose, { Schema } from "mongoose";

const personSchema = Schema({
    name: String,
    age: { type: Number},
    book_ids: [{type:Schema.Types.ObjectId, ref:"Book"}]
});


export default mongoose.model('Person',personSchema);