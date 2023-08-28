/* Staring point of the server*/

import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import AuthRoute from './app/route/accesscontrol.js';
import UserRoute from './app/route/user.js';
import PostRoute from './app/route/post.js';
import UploadRoute from './app/route/upload.js';
// Router

const app = express();

dotenv.config();
//Middleware

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


// Database connectivity
// TODO Move to config file and import when requird
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log('Listening at', process.env.PORT)))
    .catch((error => console.log(error)));

// usage of routes

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)