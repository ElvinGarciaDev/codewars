/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

function findOutlier(integers){
    //your code here
    let even = 0;
    let odd = 0;

    let oddNum;
    let evenNum;

    integers.forEach(item => item % 2 == 0 || item == 0 ? even += 1 : odd += 1)

    integers.forEach(item => {
        if(even >= 2) {
            item % 2 != 0 ? oddNum = item : null
        }else {
            item % 2 == 0 ? evenNum = item : null

        }
    })

    return odd == 1 ? oddNum : evenNum
}

// OR

const findOutlier = integers => {

    let odd = integers.filter(item => item % 2 != 0)
    let even = integers.filter(item => item % 2 == 0)

    return odd.length == 1 ? odd[0] : even[0]

}