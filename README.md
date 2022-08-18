Describe validateLength()
  Test 1: it will return the length of the input string
  Code:
    const input = "1234";
    validateLength(input);
  Expected Result: 
    4
  Test 2: It will return true if the number 15 digits or more, false otherwise, and print the length of the input
  Code: 
    const input = "123456789012345"
    validateLength(input);
    const input2 = "1234"
    validateLength(input2);
  Expected Results;
    15 True 
    4 False
  Test 3: It will return true if the number is 15 or 16 in length, false otherwise.
  Code: 
    const input = "123456789012345";
    validateLength(input);
    const input2 = "1234";
    validateLength(input2);
    const input3 = "12345678901234567";
    validateInput(input3);
  Expected Result:
      15 True 
      4 False
      17 False
  Test 4: It will return type of card based off length of number 15 for amex, 16 for visa/discover/mc, and NULL if the number is invalid
  Code:  
    const input = "123456789012345";
    validateLength(input);
    const input2 = "1234"
    validateLength(input2);
    const input3 = "1234567890123456";
    validateLength(input3);
  Expected Result: 
      15 amex
      4 null
      16 visa,mc,discover
      

      
Describe validateNumber()
  Test 1: It will return first number of the input.
  Code:
    const input = "69420";
    validateNumber(input);
  Expected Output: 
    6
  Test 2: It will return visa if the first digit is 4, mastercard if 5, discover if 6, amex if 3
  Code:
    const input = "69420";
    validateNumber(input);
    const input2 = "42069";
    validateNumber(input2);
    const input2 = "42069";
    validateNumber(input2);
    const input4 = "32345";
    validateNumber(input4);
    const input5= "12345";
    validateNumber(input5);
  Expected Result:
    6 discover
    4 visa
    5 mastercard
    3 amex
    1 null
  Test 3: It will return amex if the first two numbers are 36 or 37, visa 4, mastercard 5, discover 6, null if anything else
  Code: 
    const input = "367239"
    validateNumber(input);
    const input2 = "376231"
    validateNumber(input2);
    const input3 = "476231"
    validateNumber(input3);
    const input4 = "386231"
    validateNumber(input4);
  Expected Outcome:
    36 amex
    37 amex
    4 visa
    38 null

Describe luhnsAlgorithm()
  Test 1: It will flip the input and return flipped input
  Code: 
    const input = "1234"
    luhnsAlgorithm(input);
  Expected Outcome:
    4321
  Test 2: 

  Code:

  Expected Outcome:

  Test 3: 

  Code:

  Expected Outcome:


123456789012345 <<  
543210987654321

1234567890123456
6543210987654321