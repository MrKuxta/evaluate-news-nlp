/*function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
*/

function checkForUrl(formText) {
    /*look for http or https*/
    let check = new RegExp(/^(http|https):\/\/[^ "]+$/);
    /*using test() method to test for a match in a string*/
    return check.test(formText);
}

export { checkForUrl }