import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors())  
// CORS is used for 
// We can configure cors in detail as follows : we can explore documentation for more information

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
}))

// We can get JSON directly using express...app. to set limits of DataTransfer, we need to configure this 
app.use(express.json({
    limit: "16kb",

}))
app.use(express.urlencoded({ 
    extended: true,
    limit: "16kb",
}))
// to keep public assets, like favicon or images, for that we use static configuration 
app.use(express.static("public"));

app.use(cookieParser());

export { app }