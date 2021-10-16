const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

//make an instance
const app = express()
//middlewares created after app initialised
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//as it was shown in the lessons. However I am not sure what this does, could you please explain?
app.use(express.static('dist'))

//as it was shown in the lessons. However I am not sure what this does, could you please explain?
console.log(__dirname)

//as it was shown in the lessons. However I am not sure what this does, could you please explain?
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


//The key is unique so needs to be defined only once
const textApi = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

//fetching info from the API
const getTextInfo = async (req, res) => {
    //Construct API
    const searchUrl = req.body.formText;
    const response = await fetch(`${baseURL}key=${textApi}&url=${searchUrl}&lang=en`);
    try{
        const data = await response.json();
        console.log(data);
        //return data;
        res.send(data);
    } catch (error) {
        console.log("error:", error);
    }
};

//Create a post route (user's input)
app.post("/api",getTextInfo);








