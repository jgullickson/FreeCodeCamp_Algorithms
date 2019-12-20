function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphaSnip = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[0]) + str.length);
  for (let i = 0; i < str.length; i++){
    if (str[i] !== alphaSnip[i]){
      return alphaSnip[i];
    }
  }
  /*
  STEPS:
  1. define section of alphabet that starts at str[0] and continues for str.length
  2. compare the alphabet snippet to str, character by character, and if (str[n] === alphaSnip[n]), return that letter (looks like it's just asking for the one letter, rather than possisbly multiple missing letters)
  */ 
}

fearNotLetter("abce");
