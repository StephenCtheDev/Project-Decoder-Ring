// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function checkForUnique(alphabet) {
    for (let i in alphabet) {
      if (alphabet.lastIndexOf(alphabet[i]) != i) {
        return false;
      }
    }
    return true;
  }
  
  function substitution(input, alphabet, encode = true) {
    //screen if alphabet is a string
    if (typeof alphabet !== "string") {
      return false;
    }
  
    const inPutSpltAndLwr = input.toLowerCase().split(" ");
    const alphaLower = alphabet.toLowerCase();
    const correctAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
  
    //screen for incorrect alphabet size
    if (alphaLower.split("").length != 26 || !checkForUnique(alphaLower)) {
      return false;
    }
  
    //creates object with keys as original letter place, while value is letter substitute
    const subAlph = () => {
      const obj = {};
      //creates obj with keys from provided alphabet if encode is false
      if (!encode) {
        alphaLower.split("").forEach((key, i) => (obj[key] = correctAlpha[i]));
      } else {
        correctAlpha.forEach((key, i) => (obj[key] = alphaLower.split("")[i]));
      }
      return obj;
    };
  
    //encoding OR decoding starts below
    const subAlphResp = subAlph(); //key for decoding/encoding
    const substituteChars = [];
  
    for (let i in inPutSpltAndLwr) {
      let singleWord = [];
      for (let j in inPutSpltAndLwr[i]) {
        if (!subAlphResp[inPutSpltAndLwr[i][j]]) {
          return false;
        }
        singleWord.push(subAlphResp[inPutSpltAndLwr[i][j]]);
      }
      substituteChars.push(singleWord.join(""));
    }
  
    return substituteChars.join(" "); 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
