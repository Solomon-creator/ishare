import express from 'express';

import {uploadPosts,syncpost,comments,createPost,product } from '../controllers/gallery.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/create',createPost); //create
router.post('/upload' ,uploadPosts); //create
router.get('/sync',syncpost) // read
router.put('/comment',auth,comments) // update

router.post('/product' ,product); //create




export default router 