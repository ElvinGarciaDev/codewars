/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
    
    // Create an object. We're going to have a property for all the numbers in the array, and give the property a value of how many times that number appears 
    let obj = {}

    // Loop through the array.
    A.forEach(element => {

        // If there's a key in obj of "element" increase the value of that key by one.
        if(obj[element]) {
            obj[element]++
        }else { // Else, if there is no key in the obj of "element" create the key and assign it the value of 1
            obj[element] = 1
        }
    })

    // obj should loop like this
    // { '1': 2, '2': 4, '3': 6, '4': 1 }

    // Loop through the object.
    for(const key in obj) {
        if(obj[key] % 2 != 0) { // If the key/value we're looping at is not even, we have found our odd. So return the key
            return Number(key) 
        }
    }

}

// I'll be given an array that contains numbers. There should be a number that appears an odd amount of times
// Return the number that appears an odd amount of time
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

