/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

const divCon = x => {
    let sum = 0;
    x.forEach(item => item === Number(item) ? sum += item : sum -= Number(item))
    return sum
}