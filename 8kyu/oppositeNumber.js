/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

const opposite = number => {
    if (number < 0) {
        let str = String(number) // Turn the number into a String so we can use the split method

        // Split the string into an array
        let arr = str.split("") // Use the pop method to remove the first element which would be the negative
        arr.shift() // Remove the first element from the array
        return Number(arr.join(""))
        
    }else {
        return -number
    }
} 
