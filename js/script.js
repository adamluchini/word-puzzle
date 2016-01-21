// create a function
var wordPuzzle = function(inputString) {
  for(var i=0; i < inputString.length; i++) {
    if(inputString[i]==="a") {
      inputString = inputString.slice(0, i) + "-" + inputString.slice(i+1);

    }

  }
  // it will check if caracter is a vowel
  // change vowels to -
  // function to return a string, inputString
  return inputString;
}
