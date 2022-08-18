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

Describe validateNumber()


Apply Luhn's Algorithm


