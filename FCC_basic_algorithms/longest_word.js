function findLongestWordLength(str) {
  let allWords = str.split(" ");
  let longestYet = 0;
  for (var i = 0; i < allWords.length; i++) {
    if (allWords[i].length > longestYet) {
      longestYet = allWords[i].length;
    }
  }
  return longestYet;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");