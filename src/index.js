
// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import { Mongoose } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: '../env'
})


// When async function get executed it returns a promise, so we are using ".then" with function call after that we are creating function

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at ${process.env.PORT}`);
    });

    app.on("error", (error) => {
        console.log("Error : ", error);
        throw error;
    })
})
.catch((err) => {
    console.log("Mongo DB Connection Failed !!! ", err)
})







// DATABASE CONNECTION CODE (Commenting to use another approach)

/***********************************
import express from "express";
const app = express();

(async ()=> {
    try {
        await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error : ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Port is listening on ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error(`Error : ${error}`);
        throw error;
    }
})()

***************************************************/