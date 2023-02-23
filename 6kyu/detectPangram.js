/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){

    // Cretae an object that holds all 26 letters as a key. To start assign the value of 0
    let obj = {
        'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
    }

    // remove all white space and non letters from string. Convert to lowecase
    let str = string.replace(/[^a-zA-Z]/g, "").toLowerCase()
    
    // Loop through str, find the key of the current letter (str[i]) and increase the value
    for(let i = 0; i < str.length; i++) {
        obj[str[i]] += 1
    }

    // Loop through the object. If any key has the value of 0, it means the sentence passed in is not a pangram 
    for(const key in obj) {
        if(obj[key] == 0) {
            return false // Return false. 
        }
    }

    // Return true if the loop above runs without returning false
    return true
}