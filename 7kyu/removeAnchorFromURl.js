/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    // TODO: complete
    let arr = url.split("")
    console.log()
    let indexOf = url.indexOf("#")

    if(indexOf != -1){
        arr.splice(indexOf)
    }

    return arr.join('')
}