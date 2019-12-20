function dropElements(arr, func) {
  let testArr = [...arr];
  let i = 0;
  while (func(testArr[0]) == false){
    testArr.shift();
    if (testArr.length === 0){
      break
    }
  }
  return testArr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
