function confirmEnding(str, target) {
 let sliceRange = target.length * -1;
    console.log('range = ' + sliceRange);
 let testSnip = str.slice(sliceRange);
    console.log('testSnip = ' + testSnip);
 if (target == testSnip) {
   return true;
 } else {
   return false;
 }
}

confirmEnding("Bastian", "n");