/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

function distinct(a) {

    let arr = []

    a.forEach(element => {
        if(!arr.includes(element)){
            arr.push(element)
        }
    })

    return arr
    
}

// PREP
// P: taking in an array. Array will always contain numbers
// R: return the array passed in, but with any duplicates removed from the array
// E: [1,1,2]), [1,2]