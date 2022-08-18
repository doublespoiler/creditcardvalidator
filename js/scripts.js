//Business Logic
function validateLength(input){
  console.log (input.length);
  if (input.length === 16) {
    return "visa,mc,discover";
  } else if (input.length === 15){  
    return "amex";
  } else {
    return null;
  }
}

function validateNumber(input){
  const inputArray = input.split(""); 
  console.log(inputArray[0]);
  if (inputArray[0] === "4") {
    return "visa";
  } else if (inputArray[0] === "5") {
    return "mastercard";
  } else if (inputArray[0] === "6") {
    return "discover"
  } else if (inputArray[0] === "3") {
    return "amex"
  } else {
  return null;
  }
}
  //if the first number is 4 5 or 6
    //then if it's 4
      //it's visa
    //else if it's 5
      //it's mc
    //else (if it's 6, implicit)
      //it's discover
  //else if it's 3
    //check if it's 36 or 37
      //if it is, it's amex
    //otherwise it's invalid






function luhnsAlgorithm(input){

}

//UI Logic
window.addEventListener("load", function(event){
  event.preventDefault();
  validateNumber(); //return the card type (or say if it's invalid)
  validateLength(); //returns the length of the card or says if it's invalid
  luhnsAlgorithm(); //does luhn's algorithm
});

