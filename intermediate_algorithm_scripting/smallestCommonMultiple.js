function smallestCommons(arr) {
  /* magic number= x
  each number = e
  this has to be true of all e's: x % e === 0;
  plan: 
  2. declare variable x, this is magic number
  3. start x at 1, and then test it against each number (e) in the array; if x % e !== 0, iterate x and test again. As soon as you find a number that passes x % e === 0 for all number in the range, return that number
  */
  let range = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    range.push(i);
  }
  let testAll = function(candidate, testrange){
    for (let e = 0; e < testrange.length; e++){
      if (candidate % testrange[e] !== 0){
        return false;
      }
    }
    return true;
  }
  let x = 1;
  while (testAll(x,range) == false){
    x++;
  }
  return x;
}


smallestCommons([1,5]);
