// add an event listener to clear the initial text when focus occurs
document.querySelector("#textIn1").addEventListener("focus", clearText);
function clearText() {
    document.getElementById("textIn1").value = "";
}


// get text from the input box
function grabText() {
    let textIn;
    // grab the text that is there
    textIn = document.querySelector("#textIn1").value;
    // console.log(textIn);
    // check if text is blank, if so, post a warning.
    if( textIn.length < 1){ alert("please supply some text!"); }

    // create a new node to add text to
    let textToAdd = document.createTextNode(textIn);
    // select the storage div
    let storage = document.querySelector("#storageDiv");
    // create a new paragraph element
    let newP = document.createElement("P");
    // add the text to the elements
    newP.appendChild(textToAdd);
    // append the paragraph element to the div storage element
    storage.parentNode.appendChild(newP);
}


// check if it was the "return" key
// if so, execute the function we need.
document.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        grabText();
    }
});


// prevent default "form submit behavior" of return key
// otherwise the "form" is "submitted" and the page reloads.....
document.querySelector(".form1").addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});
