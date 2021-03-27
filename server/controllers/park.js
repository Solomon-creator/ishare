
import parkcreate from '../models/parkway.js'
import User from '../models/user.js';
import express from 'express'
import Post from '../models/parkway.js';

export const createPost = async (req,res) => {
    try { 
     const post = req.body;
     console.log(post);
     const newParkcreate = new parkcreate({ ...post ,creator:post.id, createdAt: new Date().toISOString()});
     
        await newParkcreate.save();
        //console.log(newParkcreate);
        res.status(201).json(newParkcreate)
     } catch (error) {
         res.status(402).json(
             {message}
         )
     }
 }
export const createPosts = async(req,res)=>{
   
    const {title,body} = req.body
    if(!title||!body){
        res.status(422).json({error:"please add all the fields"})
    }
    const parkpost = new parkcreate ({
        title,
        body,
       
        postedBy:req.user,
        comments:[]
    })
    parkpost.save().then(result=>{
        res.json({post:result})
    }).catch(err=>{console.log(err)})
}

export const allPosts = async(req,res)=>{
   
Post.find().populate("User").then(posts=>{res.json({posts})}).catch(err=>{console.log(err)})
};

export const getallPosts = async(req,res)=>{
    try {
        const park = await parkcreate.find();

        //console.log(park);

        res.status(200).json(park)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const myPosts = async(req,res)=>{
   //console.log(req)
    Post
    .find({PostedBy:req.userId})
    .populate("PostedBy","_id name")
    .then(myPosts=>{res.json({myPosts})})
    .catch(err=>{console.log(err)})  
};

export const signup = async (req,res) => {
    const {name,email,password} = req.body 
    if (!email||!password||!name) {
        res.status(422).json({error:"please add all fields"})
    }
       res.json({message:"successfully  created"})
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return  res.status(422).json({error:"users already exists with that email"})
        }
     const user = new User({
         email,
         password,
         name
     })
     user.save()
     .then(user=>{
         res.json({message:"saved successfully"})
     })
     .catch(err=>{
         console.log(err)
     })
    })
    .catch(err=>{
        console.log(err)
    })
};
export const comments = async (req,res) =>{
    const comment ={
        text:req.body.text,
        postedBy:req.userId
    }
    Post.findByIdAndUpdate
}
