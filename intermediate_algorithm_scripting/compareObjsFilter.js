function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);

  arr = collection.filter((colObj)=>{ 
    for (let key of sourceKeys) {
      if (!colObj.hasOwnProperty(key)){
        return false
      }
      if (colObj[key] !== source[key]){
        return false
      }
    }
    return true
  })
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
