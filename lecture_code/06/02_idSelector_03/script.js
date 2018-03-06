let node = document.getElementById('d1');
node.innerText = "<h1>This does not work</h1>";

node = document.getElementById('d2');
node.innerHTML = `<div style='background:#ff0000;'><h1>This Works!</h1><p>SO MUCH FUN</p></div>`;
