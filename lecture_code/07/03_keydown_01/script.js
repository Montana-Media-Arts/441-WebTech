document.addEventListener("keydown", printKey);

function printKey( event ) {
    let el = document.querySelector('div');

    // get the specific key pressed
    let key = event.key;

    // if the key is a letter, then add it to the current div element
    if( (key.charCodeAt(0) > 64 && key.charCodeAt(0) < 91) || (key.charCodeAt(0) > 96 && key.charCodeAt(0) < 123) ) {
        el.innerText = el.innerText + key;
    }

    // if the key is a space bar, clear the div contents
    if( key.charCodeAt(0) == 32 ){
        el.innerText = "";
    }
}
