import mongoose from 'mongoose';

const instance = mongoose.Schema({
    caption: String,
    user:String,
    image:String,
    comments: [{
        text:String
        }
    ]
})

export default mongoose.model('posts',instance)