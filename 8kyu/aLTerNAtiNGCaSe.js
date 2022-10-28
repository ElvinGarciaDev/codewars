String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let str1 = ''

    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            str1 += this[i].toUpperCase()
        } else if (this[i] === this[i].toUpperCase()) {
            str1 += this[i].toLowerCase()
        }
    }

    return str1
}