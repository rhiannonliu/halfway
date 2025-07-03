var counter = 2;
var locaInput = [];

function addInput() {
    var newdiv = document.createElement('div');
    newdiv.id = locaInput[counter];
    newdiv.innerHTML = "Location " + (counter + 1) + ": <br><input type='search' name='locaInputs[]' required> <input type='button' value='-' onclick='removeInput("+locaInput[counter]+")' style='background-color: rgb(92, 123, 19); color:white'>"
    document.getElementById('locaInput[0]').appendChild(newdiv);
    counter++;
}

function removeInput(id) {
    var element = document.getElementById(id);
    counter--;
    return element.parentNode.removeChild(element);
}
