//Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x => {
    let str = "";

    for (let i = 0; i < x.length; i++){
        if(x[i] !== " ") {
            str += x[i]
        }
    }
    return str
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));