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
  if (inputArray[0] === "4") {
    return "visa";
  } else if (inputArray[0] === "5") {
    return "mastercard";
  } else if (inputArray[0] === "6") {
    return "discover"
  } else if (inputArray[0] === "3") {
    if (inputArray[1] === "6" || inputArray[1] === "7"){
      return "amex";
    } else {
      return null;
    }
  } else {
  return null;
  }
}

function luhnsAlgorithm(input){
  const inputArray = input.split("");
  const flippedArray = inputArray.reverse();
  console.log(flippedArray);  
}

//UI Logic
window.addEventListener("load", function(event){
  event.preventDefault();
  validateNumber(); //return the card type (or say if it's invalid)
  validateLength(); //returns the length of the card or says if it's invalid
  luhnsAlgorithm(); //does luhn's algorithm
});