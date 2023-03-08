function isIsogram(str) {
  //create empty array and store all letters from str
  let arr = []; // loop through str and add all letters to arr. All of this while checking to make sure arr does not already contain the letter we're trying to add. If arr already contains the letter it means that the str passes in is an iosgram

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i].toLowerCase())) {
      return false;
    } else {
      arr.push(str[i].toLowerCase());
    }
  }

  return true;
}