// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  let primesUpTo = [];
  // i will iterate over all numbers between 2 and num
  let i = 2;
  while (i < num){
    /*
    check if i is prime, if so, push to primesUpTo array.
    to check if i is prime, we'll check every number (j) between 2 and i, and see if i is     divisible by j (i % j === 0). If (i % j === 0) is ever true, then i is not prime, and     the loop should stop testing and iterate i++ and repeat the prime test.
    */
    let prime = true;
    for (let j = 2; j < i; j++){
      if (i % j === 0){
        prime = false;
        break
      }
    }
    if (prime){
      primesUpTo.push(i);
    }
    i++;
  }
  //check if num is prime using the same test we used above for i. If num is prime, push    it to the array.
  let primeNum = true;
  for (let k = 2; k < num; k++){
      if (num % k === 0){
        primeNum = false;
      }
    }
    if (primeNum){
      primesUpTo.push(num);
    }

  //sum the items in the array using reduce and return the array 
  console.log(primesUpTo)
  return primesUpTo.reduce((a,b)=>a+b);
}

sumPrimes(10);
