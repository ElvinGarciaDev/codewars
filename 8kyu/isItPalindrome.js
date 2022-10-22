/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    // your code here

    x = x.toLowerCase();

    let arr = x.split("").reverse().join("")

   if(x.localeCompare(arr) == 0) {
    return true
   }else {
    return false
    }
}

console.log(isPalindrome("repaper"))