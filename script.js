var localCounter = 2

function addInput() {
    localCounter++;

    const inputs = document.getElementById('localInputs');

    const label = document.createElement('label');
    label.textContent = `Location ${localCounter}`;

    const inputBox = document.createElement('input');
    
    inputs.appendChild(label);
    inputs.appendChild(inputBox);
}
