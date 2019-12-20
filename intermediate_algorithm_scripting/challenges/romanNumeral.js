function convertToRoman(num) {
 let numeral = ''
 let checkDivisibility = function(remainder){
     if (remainder / 1000 >= 1){
         let thousands = Math.floor(remainder / 1000);
         remainder = remainder % 1000;
         for (let i = 0; i < thousands; i++){
             numeral += 'M';
         }
     } else if (remainder / 500 >= 1){
         if (remainder >= 900){
             numeral += 'CM';
             remainder -= 900;
         } else {
         let fiveHundreds = Math.floor(remainder / 500);
         remainder = remainder % 500;
            for (let i = 0; i < fiveHundreds; i++){
             numeral += 'D';
            }
         }
     }
     else if (remainder / 100 >= 1){
         if (remainder >= 400){
             numeral += 'CD';
             remainder -= 400;
         } else {
         let hundreds = Math.floor(remainder / 100);
         remainder = remainder % 100;
         for (let i = 0; i < hundreds; i++){
             numeral += 'C';
             }
         }
     }
     else if (remainder / 50 >= 1){
         if (remainder >= 90){
             numeral += 'XC';
             remainder -= 90;
         } else {
         let fifties = Math.floor(remainder / 50);
         remainder = remainder % 50;
         for (let i = 0; i < fifties; i++){
             numeral += 'L';
             }
         }
     }
     else if (remainder / 10 >= 1){
         if (remainder >= 40){
             numeral += 'XL';
             remainder -= 40;
         } else {
         let tens = Math.floor(remainder / 10);
         remainder = remainder % 10;
         for (let i = 0; i < tens; i++){
             numeral += 'X';
             }
         }
     }
     else if (remainder / 5 >= 1){
         if (remainder >= 9){
             numeral += 'IX';
             remainder -= 9;
         } else {
         let fives = Math.floor(remainder / 5);
         remainder = remainder % 5;
         for (let i = 0; i < fives; i++){
             numeral += 'V';
             }
         }
     }
     else if (remainder / 1 >= 1){
         if (remainder >= 4){
             numeral += 'IV';
             remainder -= 4;
         } else {
         let ones = Math.floor(remainder / 1);
         remainder = remainder % 1;
         for (let i = 0; i < ones; i++){
             numeral += 'I';
             }
         }
     }
     console.log(remainder)
     if (remainder > 0){
         checkDivisibility(remainder);
     }
 }
 checkDivisibility(num);
 console.log(numeral)
 return numeral
}

convertToRoman(3999);

/**
 * More concise solution from FCC
 * 
 var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);
 */