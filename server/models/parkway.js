import mongoose from 'mongoose';

const {ObjectId}= mongoose.Schema.Types
const postSchema = mongoose.Schema({
    title: { type:String , required:true} ,
    body: { type:String , required:true},
  
    postedBy : {type:ObjectId,ref:"User"},
    comments :[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }]
})


const parkcreate = mongoose.model("parkcreate",postSchema)

export default parkcreate