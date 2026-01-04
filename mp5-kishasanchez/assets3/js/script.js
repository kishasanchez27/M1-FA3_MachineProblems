
function emailID(){
 var emailInput = document.getElementById("txtString").value;
 let boolStr = "Valid";

 if (emailInput.includes("@")) {

    console.log(boolStr);

 } else {
    
    boolStr="Invalid";
    console.log(boolStr);
 }

 document.getElementById("txtResult").innerHTML = boolStr;

}