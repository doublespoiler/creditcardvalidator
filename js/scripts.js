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
}




function luhnsAlgorithm(input){

}

//UI Logic
window.addEventListener("load", function(event){
  event.preventDefault();
  validateNumber(); //return the card type (or say if it's invalid)
  validateLength(); //returns the length of the card or says if it's invalid
  luhnsAlgorithm(); //does luhn's algorithm
});

