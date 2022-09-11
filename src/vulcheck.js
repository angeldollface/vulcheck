/*
VULCHECK.JS by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// This variable is the security weight
// that the algorithm checks against.
export const securityWeight = 3;

// This variable is the increment weight
// that a special character warrants
// in a password.
export const specialCharacterWeight = 3;

// This variable is the increment weight
// that an "arabic" character (number or letter)
//  warrants in a password.
export const arabicCharacterWeight = 2;

// This method returns the position of a
// given character as an vareger.
export function getCharPositon(character) {
    var result = 0;
    let labvar = character.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvw';
    var alphabetList = alphabet.split('');
    for (var i = 0; i < alphabetList.length; i++) {
      if (alphabetList[i] === labvar) {
        result = i + 1;
        break;
      } else {
        // Do nothing.
      }
    }
    return result;
}
  
// This method returns the space between two characters
// as an vareger.
export function getCharSpace(characterOne, characterTwo) {
    var charOnePos = getCharPositon(characterOne);
    var charTwoPos = getCharPositon(characterTwo);
    let space = charTwoPos - charOnePos;
    return space;
}
  
// This method returns the space between two numbers
// as an vareger.
export function getNumberSpace(numberOne, numberTwo) {
    var space = numberTwo - numberOne;
    return space;
}
  
// This method checks what type
// a character has.
export function stringType(character) {
    var result = 'normChar';
    var labvar = character.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvw';
    let alphabetList = alphabet.split('');
    if (alphabetList.includes(labvar) === true) {
      // Do nothing.
    } else {
      if (isInt(character) === true){
        result = 'int';
      }
      else {
        result = 'specialChar';
      }
    }
    return result;
}

// A function to check whether a string
// is an integer.
export function isInt(expr){
    var result = false;
    if (isNaN(expr) === true) {
        // Do nothing.
    }
    else {
        result = true;
    }
    return result;
}

// This method returns the strength
// of a password on a scale from
// one to ten as an vareger.
export function passwordStrength(password) {
  var result = 0;
  let charList = password.split('');
  for (var i = 1; i < charList.length; i++) {
    var currentItem = charList[i];
    var currentItemType = stringType(currentItem);
    var lastItem = charList[i - 1];
    var lastItemType = stringType(lastItem);
    if (currentItemType == 'normChar' && lastItemType == 'normChar') {
      var itemSpace = getCharSpace(currentItem, lastItem);
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      } 
      else {}
    } else if (currentItemType == 'specialChar' &&
        lastItemType == 'specialChar') {
      result = result + specialCharacterWeight;
    } else if (currentItemType == 'int' && lastItemType == 'int') {
      var itemSpace = getNumberSpace(currentItem, lastItem);
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      }
      else {}
    }
  }
  return result;
}

// This method returns a boolean
// value (either [true] or [fasle])
// that sums up whether a password
// is secure or not.
export function isSecure(password) {
  var result = false;
  var passwordRating = passwordStrength(password);
  if (passwordRating > 8) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/// This method generates a password of
/// the length specified and returns it.
export function generatePassword(length) {
  let alphabetString = 'abcdefghijklmnopqrstuvwxyz1234567890@_;.:';
  let alphabet = alphabetString.split('');
  let result = [];
  for (var i = 0; i < length; i++) {
    let randomChar = alphabet[
      Math.floor(
        Math.random()*alphabet.length
      )
    ];
    result.push(randomChar);
  }
  return result.join('');
}

// A function to test everything.
export function testAll(){
    console.log(getCharPositon('a'));
    console.log(getCharSpace('c', 'a'));
    console.log(getNumberSpace(5,4));
    console.log(stringType('a'));
    console.log(stringType('@'));
    console.log(stringType('1'));
    console.log(passwordStrength('1969HoglinPoo'));
    console.log(isSecure('1969HoglinPoo'));
    console.log(isInt('a'));
    console.log(isInt('1'));
    console.log(generatePassword(256));
}
