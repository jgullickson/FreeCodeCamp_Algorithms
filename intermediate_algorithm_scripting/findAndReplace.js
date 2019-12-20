function myReplace(str, before, after) {
  let uppercase = new RegExp(/[A-Z]/);
  if (uppercase.test(before[0])){
    let capAfter = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, capAfter);
  }
 return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
