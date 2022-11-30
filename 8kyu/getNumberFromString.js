/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/
function getNumberFromString(s) {
    
    let num = ''

    for(let i = 0; i < s.length; i++) {
        if(s[i] == parseInt(s[i])) {
            num += s[i]
        }
    }

    return Number(num)
}

console.log(getNumberFromString("hell5o wor6ld"))

// PREP

// I'll be taking in a String that contains both numbers and letters
// Return only the numbers including in the passed in String
// "hell5o wor6ld" > 56
