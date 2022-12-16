/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {

    let obj = {}

    numbers.forEach(element => {
        if(obj[element]) { // If there's a key for this number, increase the value by 1
            obj[element]++
        }else {  // Else, if there is no key in the obj of "element" create the key and assign it the value of 1
            obj[element] = 1
        }
    })

    // Loop through the object.
    for(const key in obj) {
        if(obj[key] == 1) { // If the key length is only 1. This means we found our number that only appears once in the array passed in
            return Number(key) // Return the key which should be the number
        }
    }

}