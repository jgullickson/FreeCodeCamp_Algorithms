function titleCase(str) {
  let finalStr = '';
  //make the whole thing lowercase, just in...case :/ it's uppercased
  let lowStr = str.toLowerCase();
  //split up individual words into an array
  let wordsArr = lowStr.split(" ");
  //operate on each word
  for (var i = 0; i < wordsArr.length; i++) {
    //grab first letter of word and capitalize it
    let cap = wordsArr[i][0].toUpperCase();
    //slice first letter off and save rest of word
    let rest = wordsArr[i].slice(1,(wordsArr[i].length));
    let newWord = cap + rest;
    wordsArr.splice(i,1,newWord);
    finalStr += newWord + " ";
  }
  return finalStr.slice(0, finalStr.length-1);
}

titleCase("I'm a little tea pot");
