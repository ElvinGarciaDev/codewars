/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
    let xAmount = 0; // Keep a count of char 'x'
    let oAmount = 0; // Keep a count of char 'x'


    // Use a forLoop to determine if the char is a 'x' or 'o'. 
    for(let i = 0; i < str.length; i++) {
        // if str[i] == 'x' increase the amount
        if(str[i].toLowerCase() == 'x') { // make sure to use toLowerCase()
            xAmount += 1;
        }else if(str[i].toLowerCase() == 'o') {    // else if str[i] == 'o' increase the amount
            oAmount += 1;
        }
    }

    // If xAmount and oAmount are equal return true 
    return xAmount == oAmount ? true : false
}


// PREP

// P: taking in a string. The string can contain any char
// R: return true if the string passed in has the same amount of 'x' and 'o'
// E: XO("ooxx") => true XO("xooxx") => false
