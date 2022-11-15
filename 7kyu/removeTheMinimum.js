/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
    // throw "TODO: removeSmallest";

    const copy = numbers.slice(0)

    // Find the index of the lowest number in the array. Try using indexOf() and pass in Math.min()
    let lowest = copy.indexOf(Math.min(...numbers))

    // Remove the lowest number from the array. Try using the splice() method
    copy.splice(lowest, 1)

    // Return the array
    return copy
}


// PREP

// P - Taking in a number
// R - Return the array passed in with the lowest number revmoed. If the lowest number has a duplicate, remove the lowest index
// E - [1,2,3,4,5] // 2,3,4,5