function keepOrder(ary, val) {

    // loop through the array and check if the current value is greater than val. If it is, i'm going to grab the index/location of the previous spot
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] > val || ary[i] == val) {
      return i
    }

  }
}

console.log(keepOrder([1, 1, 2, 2, 2], 2));
