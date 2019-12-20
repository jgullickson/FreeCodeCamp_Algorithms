function translatePigLatin(str) {
  let vowelStart = new RegExp(/^[aeiou]/, 'i');
  let noVowel = new RegExp(/^((?![aeiuo]).)*$/, 'i');
  let vowel = new RegExp (/[aeiuo]/, 'i');
  if (vowelStart.test(str)){
    return str + 'way';
  }  else if (noVowel.test(str)) {
    return str + 'ay';
  } else {
    for (let i = 0; i < str.length; i++){
      if (vowel.test(str[i])) {
        let cluster = str.slice(0, i);
        return str.slice(i) + cluster + 'ay';
      }
    }
  }
  
}

translatePigLatin("consonant");
