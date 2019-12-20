function truthCheck(collection, pre) {
  let testArr = collection.filter((obj)=>{
    return obj.hasOwnProperty(pre) && obj[pre];
  });
  if (testArr.length === collection.length){
    return true
  } else return false
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
