/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
    // Your code here
      var newStr = '';
    for (var i = 0; i < str.length; i++) {
      newStr += str.charAt(i) + str.charAt(i);
    }
    return newStr;
  }
  