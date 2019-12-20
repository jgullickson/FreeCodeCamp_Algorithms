function getIndexToIns(arr, num) {
  let belong; //number
  arr.sort(function(a,b){return a-b});
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      belong = i;
      return belong;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);