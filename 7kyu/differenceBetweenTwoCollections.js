/*
Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]
*/

function diff(a, b){
    let arr = [...a, ...b].sort();
    let obj = {};

    arr.forEach(item => {
        if (a.includes(item) && b.includes(item)) {
            // Item is present in both arrays
        } else {
            // Item is present in one array but not in the other
            obj[item] = true;
        }
    });

    const difference = Object.keys(obj).sort();
    return difference
}
