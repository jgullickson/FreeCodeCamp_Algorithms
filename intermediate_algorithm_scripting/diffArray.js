function diffArray(arr1, arr2) {
  var concatArr = arr1.concat(...arr2);
  let newArr =[];
  for (var i = 0; i < concatArr.length; i++){
    let mutateMe = [...concatArr];
    let item = mutateMe.splice(i,1);
    if (!mutateMe.some( a => a == item[0])){
      newArr.push(item[0]);
    }
  }
  // Same, same; but different.
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//MUCH MORE ELEGANT SOLUTIONS FROM FCC SOLUTIONS/HINT

//SOLUTION 1:
/*
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
*/

//SOLUTION 2:
/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/