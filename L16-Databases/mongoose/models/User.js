import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    marks: Number
})

export default mongoose.model('User',userSchema);