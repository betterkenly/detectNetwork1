// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var dinersClub = false;
  var americanExpress = false;
  var visa = false;
  var masterCard = false;
  var discover = false;
  var maestro = false;
  

  var firstTwoNumber = cardNumber.substring(0,2);
  var discoverPrefix1 = cardNumber.substring(0,4);
  var maestroPrefix = cardNumber.substring(0,4);
  var discoverPrefix2 = cardNumber.substring(0,7);
  var numberLength = cardNumber.length;
  var maestroLength = numberLength >= 12 && numberLength <= 19;

  if( firstTwoNumber === "38" || firstTwoNumber === "39" ){
  	dinersClub = true;
  }

  if( firstTwoNumber === "34" || firstTwoNumber === "37" ){
  	americanExpress = true;
  }

  if( numberLength === 13 || numberLength === 16 || numberLength === 19 ){
  	visa = true;
  }

  if( firstTwoNumber === "51" || firstTwoNumber === "52" || firstTwoNumber === "53" || firstTwoNumber === "54" || firstTwoNumber === "55" ){
  	masterCard = true;
  }

  if( discoverPrefix1 === "6011" || discoverPrefix2 === "644-649" || firstTwoNumber === "65" ){
  	discover = true;
  }
  
  if( maestroPrefix === "5018" || maestroPrefix === "5020" || maestroPrefix === "5038" || maestroPrefix === "6304" ){
  	maestro = true;
  }

  if( dinersClub && numberLength === 14 ){
  	return "Diner's Club";
  }

  if( discover && numberLength === 16 ){
  	return "Discover";
  }

  if( discover && numberLength === 19 ){
  	return "Discover";
  }

  if( americanExpress && numberLength === 15 ){
  	return "American Express";
  }

  if( visa && cardNumber.substring(0,1) === "4" ){
  	return "Visa";
  }

  if( masterCard && numberLength === 16 ){
  	return "MasterCard";
  }

  if( maestro && maestroLength ){
  	return "Maestro";
  }




  
};
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
console.log(detectNetwork("501812345678901234"));
console.log(detectNetwork("4123456789012"));
console.log(detectNetwork("39345678901234"));
console.log(detectNetwork("373456789012345"));
console.log(detectNetwork("343456789012345"));

