function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
      return arr[i];
    }
  }
  return undefined;
  // let num = 0;
  // return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
