// YOUR CODE BELOW

function caesarCypher(str, num) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    let currentSpot = alphabet.indexOf(str[i]);
    if (currentSpot === -1) newString += str[i];
    else newString += alphabet[(currentSpot + num) % alphabet.length];
    }
    return newString;
}

//Define a function called caesarCypher
//make variable for whole alphabet
//create variable for final string return
 // write a for loop that rotates through letters one at a time. 
 //make a variable to reflect our current location in the alphabet
 // if statement - current spot not on array add new string and index of provided str
    // otherwise, add current spot and provided number shift

describe('Caesar Cypher', () => {

  it('is a function?', () => {
    expect(typeof caesarCypher).toEqual('function');
  });

  it('rotates a letter by the number passed in', () => {
    let returnedValue = caesarCypher('a', 2);
    expect(returnedValue).toEqual('c');
  });

  it('rotates every letter in the string by the supplied letter', () => {
    let returnedValue = caesarCypher('doggo', 7);
    expect(returnedValue).toEqual('kvnnv');
  });

  it('wraps around to the beginning of the alphabet when necessary', () => {
    let returnedValue = caesarCypher('hello', 13);
    expect(returnedValue).toEqual('uryyb');
  });

  it('retains spaces between encrypter world', () => {
    let returnedValue = caesarCypher('hello world', 13);
    expect(returnedValue).toEqual('uryyb jbeyq');
  });

});