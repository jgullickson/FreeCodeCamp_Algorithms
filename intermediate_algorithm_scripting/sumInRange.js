function sumAll(arr) {
  let total = 0;
  arr.sort((a, b) => a - b);
  for (var i = arr[0]; i <= arr[1]; i++){
    total += i;
  }
  return total;
}

sumAll([1, 4]);
