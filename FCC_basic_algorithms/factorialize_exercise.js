function factorialize(num) {
  let allInts = [];
  if (num === 0) {
    return 1;
  } else {
  for (var i = 1; i <= num; i++) {
    allInts.push(i);
    console.log(allInts);
  }

  let multiply = function(accumulator, currentValue) {
    return accumulator * currentValue;
  }
  
  return (allInts.reduce(multiply));
}
}

factorialize(5);