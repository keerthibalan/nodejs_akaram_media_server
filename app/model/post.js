import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: { 
        type: String,
        required: true
    },
    description: String, //post Description
    likes: [], // user Id
    image: String
},
{timestamps: true}

);

const PostModel = mongoose.model('posts', postSchema);

export default PostModel