function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('articleSource').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //.then(res => {
    //    return res.json()
    //})
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})

    postTextInfo("http://localhost:8081/api", {url: formText})
    //giati to exei url: formText kai oxi formText, dokimase ti allazei otan to trexeis, episis allakse to http .... /api giati fainetai plagiarism
    
    //it waits until it has received the data and posted the data and then update
    .then(function(result) {
        console.log(result.agreement);
        document.getElementById("agreement").innerHTML = "Agreement: ${result.agreement}";
        document.getElementById("subjectivity").innerHTML = "Subjectivity: ${result.subjectivity}";
        document.getElementById("confidence").innerHTML = "Confidence: ${result.confidence}";
        document.getElementById("irony").innerHTML = "Irony: ${result.irony}";
    })
};

//function declarations:

//post request to the endpoint of  our server
const postTextInfo = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error:", error);
    }
};



//UpdateUI function - dokimase na to grapseis san ksexwristo function px updateUI()

export { handleSubmit }