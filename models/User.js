import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }] //1 blok tek kişiye ait olacak fakat bir kişinin birden çok bloğu olacak
});

export default mongoose.model("User", userSchema);
//users