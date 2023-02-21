/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function(name) {
    let nameFormat = ''

    str += name[0].toUpperCase()

    for(let i = 1; i < name.length; i++) {
        nameFormat += name[i].toLowerCase()
    }

    return `Hello ${nameFormat}`

};