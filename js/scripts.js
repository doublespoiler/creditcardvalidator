//Business Logic
function validateLength(input){
  return input.length;
}

function validateNumber(input){

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

