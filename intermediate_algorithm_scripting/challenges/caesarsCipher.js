function rot13(str) { // LBH QVQ VG!
//A = 65, Z = 90
let offset = 13; //could change for different cipher
let azRegex = new RegExp(/[A-Z]/);
let deciphered = '';
for (let i = 0; i < str.length; i++){
  if (!azRegex.test(str[i])){
    deciphered += str[i];
  } else {
    let cipherCharCode = str[i].charCodeAt(0);
    let decipheredCharCode = cipherCharCode + offset;
    if (decipheredCharCode > 90){
      decipheredCharCode = 64 + (decipheredCharCode - 90);
      deciphered += String.fromCharCode(decipheredCharCode);
    } else {
      deciphered += String.fromCharCode(decipheredCharCode);
    }
  }
}
  console.log(deciphered);
  return deciphered;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");