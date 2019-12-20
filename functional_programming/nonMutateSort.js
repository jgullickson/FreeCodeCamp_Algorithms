var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [...globalArray].sort((a,b)=>a-b);
  // Add your code above this line
}
nonMutatingSort(globalArray);