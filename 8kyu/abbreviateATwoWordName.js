/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){

    // code away
    let index = name.indexOf(" ") // Find the index of the space. When found add a one so we can get the first letter of the second name
    let str = `${name[0]}.${name[index + 1]}`.toUpperCase()
    return str
}

abbrevName("elvin garcia")