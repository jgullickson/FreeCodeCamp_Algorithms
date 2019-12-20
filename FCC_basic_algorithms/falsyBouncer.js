function bouncerFalse(arr) {
  //remove falsy
  let truthyArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

bouncer([7, "ate", "", false, 9]);

function bouncerTrue(arr) {
    // remove truthy
    let falsyArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!(arr[i])) {
        truthyArr.push(arr[i]);
      }
    }
    return falsyArr;
  }
  
  bouncer([7, "ate", "", false, 9]);
