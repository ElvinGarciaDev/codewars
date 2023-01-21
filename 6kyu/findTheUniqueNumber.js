/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

function findUniq(arr) {
    // do magic
    let obj = {}

    arr.forEach((item) => {
        if(obj[item]) { // If there's a key for this number, increase the value by 1
            obj[item]++
        }else {  // Else, if there is no key in the obj of "element" create the key and assign it the value of 1
            obj[item] = 1
        }
    })

    // Loop through the object.
    for(const key in obj) {
        if(obj[key] == 1) { // If the value of this key = 1, this means we found our unique number
            return Number(key)
        }
    }
}
findUniq([1,5,5,10,1])