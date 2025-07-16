var localCounter = 2

function addInput() {
    localCounter++;

    const inputs = document.getElementById('localInputs');

    const label = document.createElement('label');
    label.textContent = `Location ${localCounter}:`;

    const inputBox = document.createElement('input');

    const button = document.createElement('button');
    button.type = "button" /*doesn't submit the form once clicked on*/
    button.textContent = "-"
    button.onclick = function() {
        label.remove();
        inputBox.remove();
        button.remove();
        localCounter--;
    }

    const br = document.createElement('br');
    
    inputs.appendChild(label);
    inputs.appendChild(br);
    inputs.appendChild(inputBox);
    inputs.appendChild(br);
}
