const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
const authRoutes = require("./routes/auth");

const app = express();

const basestr = "/app"; // I generally use /app when dealing with REST APIs, not necessary, just what I've done for a while now

// basic body parser stuff
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handling CORS, i just 
app.use(( req, res, next ) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


app.use(`${basestr}/feed`, feedRoutes);
app.use(`${basestr}/auth`, authRoutes);

// the React front-end will default to 3000 if I'm not mistaken
app.listen(8080);