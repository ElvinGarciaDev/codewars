function between(a, b) {
    // your code here
    let arr = []
    
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    for (let i = min; i <= max; i++) {
      arr.push(i)
    }
    
    return arr
}