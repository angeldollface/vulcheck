/*
VULCHECK by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// This method returns the position of a
// given character as an integer.
export function getCharPositon(character: string): number {
    let result: number = 0;
    const labvar: string = character.toLowerCase();
    const alphabetList: Array<string> = 'abcdefghijklmnopqrstuvw'.split('');
    for (let i: number = 0; i < alphabetList.length; i++) {
      if (alphabetList[i] === labvar) {
        result = i + 1;
        break;
      } 
      else {
        // Do nothing.
      }
    }
    return result;
}
  
// This method returns the space between two characters
// as an integer.
export function getCharSpace(characterOne: string, characterTwo: string): number {
   return getCharPositon(characterTwo) - getCharPositon(characterOne);
}
  
// This method returns the space between two numbers
// as an integer.
export function getNumberSpace(numberOne: number, numberTwo: number): number {
    return numberTwo - numberOne;
}
  
// This method checks what type
// a character has.
export function stringType(character: string): string {
    let result = 'normChar';
    const labvar = character.toLowerCase();
    const alphabetList = 'abcdefghijklmnopqrstuvw'.split('');
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
export function isInt(expr: string): boolean{
  return RegExp('[0-9]+').test(expr);
}

// This method returns the strength
// of a password on a scale as an integer.
export function passwordStrength(
  password: string,
  securityWeight: number,
  arabicCharacterWeight: number,
  specialCharacterWeight: number
): number {
  let result: number = 0;
  const charList: Array<string> = password.split('');
  for (let i: number = 1; i < charList.length; i++) {
    const currentItem = charList[i];
    const currentItemType: string = stringType(currentItem);
    const lastItem: string = charList[i - 1];
    const lastItemType: string = stringType(lastItem);
    if (currentItemType == 'normChar' && lastItemType == 'normChar') {
      const itemSpace: number = getCharSpace(currentItem, lastItem);
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      } 
      else {
        // Do nothing.
      }
    } else if (currentItemType == 'specialChar' &&
        lastItemType == 'specialChar') {
      result = result + specialCharacterWeight;
    } else if (currentItemType == 'int' && lastItemType == 'int') {
      const itemSpace: number = getNumberSpace(
        parseInt(currentItem), 
        parseInt(lastItem)
      );
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      }
      else {
        // Do nothing.
      }
    }
  }
  return result;
}

// This method returns a boolean
// value (either [true] or [fasle])
// that sums up whether a password
// is secure or not.
export function isSecure(
  password: string,
  specialCharacterWeight: number,
  arabicCharacterWeight: number,
  securityWeight: number,
  cutOff: number
): boolean{
  let result = false;
  const passwordRating = passwordStrength(
    password,
    securityWeight,
    arabicCharacterWeight,
    specialCharacterWeight
  );
  if (passwordRating > cutOff) {
    result = true;
  } else {
    // Do nothing.
  }
  return result;
}

/// This method generates a password of
/// the length specified and returns it.
export function generatePassword(length: number): string {
  const alphabet: Array<string> = 'abcdefghijklmnopqrstuvwxyz1234567890@_;.:'.split('');
  const result: Array<string> = [];
  for (let i: number = 0; i < length; i++) {
    const randomChar = alphabet[
      Math.floor(
        Math.random()*alphabet.length
      )
    ];
    result.push(randomChar);
  }
  return result.join('');
}

export default  { 
    getCharPositon, 
    getCharSpace,
    getNumberSpace,
    stringType,
    isInt,
    passwordStrength,
    isSecure,
    generatePassword,
};
