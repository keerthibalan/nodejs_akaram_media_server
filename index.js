/* Staring point of the server*/

import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './app/route/AccessControl.js';
import UserRoute from './app/route/User.js';
// Router

const app = express();

dotenv.config();

//Middleware

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// Database connectivity
// TODO Move to config file and import when requird
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log('Listening at', process.env.PORT)))
    .catch((error => console.log(error)));

// usage of routes

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)