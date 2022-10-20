/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


// The reduce method can be used to find the sum of an array, The Number object can make sure any strings get converted into numbers
let sumMix = x => x.reduce((previous, current) => previous + Number(current), 0)
