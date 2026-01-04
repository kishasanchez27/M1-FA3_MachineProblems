
function changeReplaceAll(){
 let origString = document.getElementById("txtString").value; 

 let modString = origString.replaceAll(" ","");

 document.getElementById("txtResult").innerHTML = modString;

}