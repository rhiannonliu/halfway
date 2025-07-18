function addLoca() {

    const locaInputs = document.getElementById('locaInputs');

    const wrapper = document.createElement('div');
    
    const locaInput = document.createElement('input')
    locaInput.type = "search";
    locaInput.name = "locaInput"
    locaInput.placeholder = "Enter Location";

    const button = document.createElement('button');
    button.style.backgroundColor = "rgb(92, 123, 19)";
    button.style.color = "white";
    button.textContent = "-"
    button.onclick = function() {
        wrapper.remove();
    }

    wrapper.appendChild(locaInput);
    wrapper.appendChild(button);
    wrapper.appendChild(document.createElement('br'))
    locaInputs.appendChild(wrapper);
}

