function palindrome(str) {
  let nonAlphaNum = new RegExp(/[\W*_]/);
  let scrubbedStr = str
                    .toLowerCase()
                    .split("")
                    .filter(char => !nonAlphaNum.test(char));
  while (scrubbedStr.length > 1){
    if (scrubbedStr[0] === scrubbedStr[scrubbedStr.length - 1]){
      scrubbedStr.pop();
      scrubbedStr.shift();
    } else return false;
  }
  return true;
}



palindrome("han&*,_nah");