function countCharacters(){

let senString = document.getElementById("txtString").value;

let modString = senString.trim();

let countCh = modString.length;

document.getElementById("txtResult").innerHTML = countCh;

}