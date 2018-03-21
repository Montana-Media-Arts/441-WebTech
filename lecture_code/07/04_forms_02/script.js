let bgColRads = document.querySelectorAll(".bgColor");
let formElem = document.querySelector("form");

formElem.addEventListener("click", changeBG);

function changeBG(e){
    for( rad of bgColRads ){
        if( rad.checked ){
            document.body.style.background = rad.value;
        }
    }
}
