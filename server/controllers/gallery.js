import igpost from '../models/igpost.js'
import Product from '../models/product.js'

export const product = async (req,res) => {
    const post = req.body;
    const newProduct= new Product({ ...post ,creator:req.userId, createdAt: new Date().toISOString()});
    try {
       await newProduct.save();
       res.status(201).json(newProduct)
    } catch (error) {
        res.status(402).json(
            {message }
        )}};
export const createPost = async (req,res) => {
    const post = req.body;
    const newIgpost = new igpost({ ...post ,creator:req.userId, createdAt: new Date().toISOString()});
    try {
       await newIgpost.save();
       res.status(201).json(newIgpost)
    } catch (error) {
        res.status(402).json(
            {message }
        )}};
export const uploadPosts = async(req,res)=>{
        const post = req.body;
        igpost.create(post,(err,data)=>{
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })};
export const syncpost = async(req,res)=>{
       igpost.find((err,data)=>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }})}
export const comments = async(req,res)=>{
       const comment = {
           text:req.body.text,
           postedBy:req.user
       }}
