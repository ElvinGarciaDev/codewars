/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    
    let reversedStr = ''

    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr.split(" ").reverse().join(" ")
}
