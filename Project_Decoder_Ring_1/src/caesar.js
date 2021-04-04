// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
     //screen shift if incorrectly inputted
  if (!shift || shift < -25 || shift == 0|| shift > 25) {
    return false;
  }
  //screen encode: if false, shift is multiplied by -1
  if (!encode) {
    shift *= -1;
  }
  //split input to character array
  let inputSplitUp = input.split("");
  //Array to hold our shifted characters
  let shiftedCharHolder = [];
  //loop through inputSplitUp
  for (let index in inputSplitUp) {
    if (
      //screen if character falls outside of the lowercase Unicode values
      inputSplitUp[index].toLowerCase().charCodeAt(0) <= 96 ||
      inputSplitUp[index].toLowerCase().charCodeAt(0) >= 123
    ) {
      shiftedCharHolder.push(inputSplitUp[index]);
    } else {
      let lowerAndCoded = inputSplitUp[index].toLowerCase().charCodeAt(0);
      //for each character Unicode value, apply shift value
      const shiftFunction = () => {
        let shiftedCode = lowerAndCoded + shift;
        //if shifted value falls outside of lowercase range, add or subtract 26 to loop
        if (shiftedCode < 97) {
          return (shiftedCode += 26);
        } else if (shiftedCode > 122) {
          return (shiftedCode -= 26);
        } else {
          return shiftedCode;
        }
      };
      //convert Unicode value back to character & push into holder
      let shiftedChar = String.fromCharCode(shiftFunction());
      shiftedCharHolder.push(shiftedChar);
    }
  }
  return shiftedCharHolder.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
