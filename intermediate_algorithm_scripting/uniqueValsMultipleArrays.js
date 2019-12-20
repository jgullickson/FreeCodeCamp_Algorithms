function uniteUnique(...arr) {
  let unique = [];
  arr.map((subArr)=>{
    for (let i = 0; i < subArr.length; i++){
      if (!unique.includes(subArr[i])){
        unique.push(subArr[i]);
      }
    }
  })
  return unique;
          
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
