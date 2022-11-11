/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){

    // split the string
    let arr = s.split(" ")

    // set the first element to the smallest
    let shortest = arr[0].length

    // Use a loop to traverse 
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length < shortest) {
            shortest = arr[i].length
        }
    }


    return shortest
}