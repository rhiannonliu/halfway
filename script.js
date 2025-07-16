var localCounter = 2

function addInput() {
    localCounter++;

    const inputs = document.getElementById('localInputs');

    const div = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = `Location ${localCounter}:`;

    const inputBox = document.createElement('input');

    const button = document.createElement('button');
    button.type = "button" /*doesn't submit the form once clicked on*/
    button.textContent = "-";
    button.style.backgroundColor = "rgb(92, 123, 19)";
    button.style.color = "white";
    button.onclick = function() {
        label.remove();
        inputBox.remove();
        button.remove();
        localCounter--;
    }
    
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
    div.appendChild(inputBox);
    div.appendChild(button);
    div.appendChild(document.createElement('br'));

    inputs.appendChild(div);
}
