/*
Find the mean (average) of a list of numbers in an array.


*/

var findAverage = function (nums) {
    sum = nums.reduce((acc, current) => acc += current, 0)

    return sum / nums.length
}