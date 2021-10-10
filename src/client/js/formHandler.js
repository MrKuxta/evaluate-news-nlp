const fetch = require('node-fetch')

let resultOutput = document.getElementById("results");
let ironyOutput = document.getElementById("irony");
let agreementOutput = document.getElementById("agreement");
let subjectivityOutput = document.getElementById("subjectivity");
let confidenceOutput = document.getElementById("confidence");


agreementOutput.innerHTML = "Agreement: results pending";
subjectivityOutput.innerHTML = "Subjectivity: results pending";
confidenceOutput.innerHTML = "Confidence: results pending";
ironyOutput.innerHTML = "Irony: results pending";


import checkForUrl from './urlValidation';


async function handleSubmit(event) {
    event.preventDefault()

    //to clean the values for the next submit
    resultOutput.innerHTML = "";
    agreementOutput.innerHTML = "";
    subjectivityOutput.innerHTML = "";
    confidenceOutput.innerHTML = "";
    ironyOutput.innerHTML = "";

    // check what text was put into the form field
    let formText = document.getElementById('articleSource').value;

    // print the message to show progress
    console.log("::: Form Submitted :::");


    // check the validity of the url
    let checkResult = document.getElementById('urlCheck');

    if (checkForUrl(formText)) {
        checkResult.innerHTML="Valid URL!"
    } else {
        checkResult.innerHTML="Please Insert a valid URL!"
    }

    //call api
    let apiReturn = await apiResult('http://localhost:8081/api', formText)

    //it waits until it has received the data and posted the data and then update
    .then(apiReturn => apiReturn.json())

    //then updates the text on the client
    .then(function(res) {
        resultOutput.innerHTML = res.message;
        agreementOutput.innerHTML = 'Agreement: ${res.agreement}';
        subjectivityOutput.innerHTML = 'Subjectivity: ${res.subjectivity}';
        confidenceOutput.innerHTML = 'Confidence: ${res.confidence}';
        ironyOutput.innerHTML = 'Irony: ${res.irony}';
        //document.getElementById("score_tag").innerHTML = "Score: ${result.score_tag}";
    })
}


//function declaration

export async function apiResult(url, formText) {

    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        //or headers: {'Content-Type': "application/json"}
        headers: { 'Content-Type': "application/json" },        
        body: JSON.stringify({ formText })
    })
    return response
}

export { handleSubmit }