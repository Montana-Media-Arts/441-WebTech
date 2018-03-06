// Notice how the following only sets the inner "TEXT"
// And therefore, the tags are also printed as 'text'
let node = document.getElementById('d1');
node.innerText = "<h1>This does not work</h1>";

// This allows the developer to use valid HTML
node = document.getElementById('d2');
node.innerHTML = `<div style='background:#ff0000; padding:2rem;'><h1>This Works!</h1><p>SO MUCH FUN</p></div>`;
