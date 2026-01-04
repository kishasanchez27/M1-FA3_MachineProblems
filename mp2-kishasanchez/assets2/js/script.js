
function searchWord(){
 var senString = document.getElementById("txtString").value;
 var subWord = document.getElementById("txtWord").value;
 let boolStr = "Found";

 if (senString.includes(subWord)) {

    console.log(boolStr);

 } else {
    
    boolStr="Not Found";
    console.log(boolStr);
 }

 document.getElementById("txtResult").innerHTML = boolStr;

}