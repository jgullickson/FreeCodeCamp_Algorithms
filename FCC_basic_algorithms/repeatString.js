function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  } else {
    let repeatedString = '';
    for (var i = 0; i < num; i++) {
      repeatedString += str;
      console.log(repeatedString);
    }
    return repeatedString;
  }
}

repeatStringNumTimes("abc", 3);