/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function solution(str){
  
    let arr = str.split("") // Convert String into an array, so we can use the reverse method to reverse the array
    return arr.reverse().join("") // reverse the array and then use the join method to convert the array into a string
}

solution("Elvin")