import express from 'express';

import {createPosts, allPosts, myPosts,getallPosts} from '../controllers/park.js'

const router = express.Router();

router.get('/getallPosts' ,getallPosts); //read

router.get('/getmy',myPosts);

router.post('/create',createPosts); //create




export default router 