const reverseLetter = str => {

    let arr = "abcdefghijklmnopqrstuvwxyz".split("").join("")
    let reverse = []

    for(let i = 0; i < str.length; i++) {
        if(arr.includes(str[i])) {
            reverse.push(str[i])
        }
        
    }

    return reverse.reverse().join("")

}