import mongoose from 'mongoose' ;
const Schema = mongoose.Schema

const ProductSchema = mongoose.Schema({
    writer:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    title:{
        type:String,
        maxlength:50
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    images:{
        type:Array,
        default:[]
    },
    continents:{
        type:Number,
        default:1
    },
    sold:{
        type:Number,
        maxlength:100,
        default:0
    },
    view:{
        type:Number,
        default:0
    },  
},{timestamps:true}
)
const Product = mongoose.model("Product",ProductSchema)

export default Product