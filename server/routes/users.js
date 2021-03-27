import express from 'express';

import {signin,signup} from '../controllers/user.js'

const router = express.Router();

router.post('/signin',signin) //create
router.post('/signup',signup)

export default router 