/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds( values ){
    // Return all non-odd values
    let arr = []

    values.forEach(item => item % 2 == 0 && arr.push(item))

    return arr
}

console.log(noOdds([0,1,2,3]))