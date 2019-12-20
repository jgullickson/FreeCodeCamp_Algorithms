function spinalCase(str) {
  let modStr = str;
  let spinalStr = '';
  modStr = modStr.replace(/([a-z])([A-Z])/g, '$1 $2');
  let wordsArr = modStr.split(/\W|_/);
  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === 0){
      spinalStr += word.toLowerCase();
    } else {
      spinalStr += `-${word.toLowerCase()}`;
    }
  }
  return spinalStr;
}

spinalCase('This Is Spinal Tap');