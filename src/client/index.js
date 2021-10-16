import { checkForUrl } from './js/urlValidation'
import { handleSubmit } from './js/formHandler'

/*import the styles*/
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
import "./styles/resets.scss"

let agreementOutput = document.getElementById("agreement");
let subjectivityOutput = document.getElementById("subjectivity");
let confidenceOutput = document.getElementById("confidence");


agreementOutput.innerHTML = "Agreement: results pending";
subjectivityOutput.innerHTML = "Subjectivity: results pending";
confidenceOutput.innerHTML = "Confidence: results pending";

alert("I EXIST")
//console.log("CHANGE!!");

export {
    checkForUrl,
    handleSubmit
}