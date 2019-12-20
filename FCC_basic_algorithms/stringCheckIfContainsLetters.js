function mutation(arr) {
  //lowercase to ease comparison
  let wordOne = arr[0].toLowerCase();
  let wordTwo = arr[1].toLowerCase();
  for (var i = 0; i < wordTwo.length; i ++) {
    if (wordOne.indexOf(wordTwo[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);