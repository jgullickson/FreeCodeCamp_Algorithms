function addTogether() {
  //check if all arguments are numbers; if not, return undefined
  if (
      ![...arguments]
          .map((arg)=> typeof arg === "number" ? true : false)
          .reduce((a,c)=> c === true ? true : false)
    ) {
      return undefined
      }
  //check if > 1 argument; if not, return function
  if ([...arguments].length > 1){
    return [...arguments].reduce((a,c)=>a+c);
  } else {
    return (x) => {
        if (typeof x !== "number"){
          return undefined
          } else {
            return [...arguments][0] + x;
          }
    }
  }
}

addTogether(2,3);

/* MORE ELEGANT SOLUTION FROM FCC
function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
*/