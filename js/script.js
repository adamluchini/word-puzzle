// create a function
// var wordPuzzle = function(inputString) {
//   for(var i=0; i < inputString.length; i++) {
//     // if(inputString[i]==="a") {
//     //   inputString = inputString.slice(0, i) + "-" + inputString.slice(i+1);
//     // }
//     if(/[aeiou]/i.test(inputString[i])) {
//       inputString = inputString.slice(0, i) + "-" + inputString.slice(i+1);
//     }
//
//   }
//   // it will check if caracter is a vowel
//   // change vowels to -
//   // function to return a string, inputString
//   return inputString;
// }

var wordPuzzle = function(inputString) {
  for(var i=0; i < inputString.length; i++) {
    if(/[aeiou]/i.test(inputString[i])) {
      inputString = inputString.slice(0, i) + "-" + inputString.slice(i+1);
    }
  }
  return inputString;
}
$(document).ready(function() {
  // event handler for form
  $("#puzzlesForm").submit(function(event) {

    // alert(     wordPuzzle($("#response").val())   );

    // wordPuzzle($("#response").val())
    $("#target").text(wordPuzzle($("#response").val()));

    event.preventDefault();
  });
});
