import express from 'express';

import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/',auth,createPost); //create
router.get('/' ,getPosts); //read
router.patch('/:id',auth, updatePost) //update
router.patch('/:id/likePost',auth,likePost) //update
router.delete('/:id',auth,deletePost) //delete


//router.get('/:id',getPosts)

export default router 