

function countCharacters(){

let senString = document.getElementById("txtString").value;
let repWord = document.getElementById("txtWoRep").value;
let newWord = document.getElementById("txtNewWord").value;


if (senString.includes(repWord)) {

  let modSenString = senString.replace(repWord, newWord);
  document.getElementById("txtResult").innerHTML = modSenString;
} 

}