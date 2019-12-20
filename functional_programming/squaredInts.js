const squareList = (arr) => {
  // only change code below this line
  if (typeof arr.reduce((a,c)=>a+c) === 'number'){
  return arr
  .filter((value)=> (Number.isInteger(value) && value > 0))
  .map((value)=>value*value);
  } else return "This function only accepts an array of real numbers";
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, '1', 5, 3, -3.2]);
console.log(squaredIntegers);
