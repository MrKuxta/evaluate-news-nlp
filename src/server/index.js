const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//extra apo to copied paradeigma pou kanw
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//telos extra

//make an instance
const app = express()

//auto den kserw giati uparxei? des ta videakia otan to edeiksa, mipws eipan tipota
app.use(express.static('dist'))

//ti emfanizei sto log arage? rikse mia matia
console.log(__dirname)

//auto den kserw giati uparxei? des ta videakia otan to edeiksa, mipws eipan tipota
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//Create a post route (user's input)
app.post("http://localhost:8081/api",getTextInfo);

//The key is unique so needs to be defined only once
const textApi = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

//fetching info from the API
const getTextInfo = async (req, res) => {
    //Construct API
    
    const searchUrl = req.body.url;
    
    const res = await fetch("${baseURL}key=${textApi}&url=${searchUrl}$lang=en");
    try{
        const data = await res.json();
        console.log(data);
        return data;
    }catch (error) {
        console.log("error:", error);
    }
};








