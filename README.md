Describe validateLength()
Validate the length
  visa 16
  mc 16
  disc 16
  amex 15

  Test: it will return the length of the input string
  Code:
    const input = "1234"
    validateLength(input);
  Expected Result: 
    4

  Test: It will return true if the number 15 digits or more, false otherwise, and print the length of the input
  Code: 
    const input = "123456789012345"
    validateLength(input);
    const input2 = "1234"
    validateLength(input2);
  Expected Results;
    15
    True 
    4
    False

  Test: It will return true if the number is 15 or 16 in length, false otherwise.
  Code: 
    const input = "123456789012345"
    validateLength(input);
    const input2 = "1234"
    validateLength(input2);
    const input3 = "12345678901234567"
    validateInput(input3);
  Expected Result:
      15
      True 
      4
      False
      17
      False

  Test: It will return type of card based off length of number 15 for amex, 16 for visa/discover/mc, and NULL if the number is invalid
  Code:  
    const input = "123456789012345"
    validateLength(input);
    const input2 = "1234"
    validateLength(input2);
    const input3 = "1234567890123456"
    validateLength(input3);
  Expected Result: 
      15
      amex
      4
      null
      16
      visa,mc,discover
      



      
Describe validateNumber()


Apply Luhn's Algorithm


