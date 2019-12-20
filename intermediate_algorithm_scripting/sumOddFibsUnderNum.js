function sumFibs(num) {
  let fibs = [];
  let i = 1;
  if (num === 1){
    return 0;
  }
  while (i <= num) {
    if (i === 1){
      fibs.push(i, i);
      i++;
    } else if (i > 1) {
        fibs.push(i);
        i+=fibs[fibs.indexOf(i) - 1];
    }
  }
  return fibs
            .filter((num)=> num % 2 !== 0)
            .reduce((a,b)=>a+b)
}