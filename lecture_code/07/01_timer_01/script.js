function changeBackground(){
    let el = document.querySelector('body');
    el.style.background = '#ff0000';

    alert("The Example Page Background Color Just CHANGED!");
}

setTimeout( changeBackground, 3000 );
