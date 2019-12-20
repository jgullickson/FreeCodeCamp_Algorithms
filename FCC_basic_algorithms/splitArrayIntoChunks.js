function chunkArrayInGroups(arr, size) {
  /*new array to push smaller chunks to*/
  let twoDim = [];
  /*capture inital array length, since original array is being         changed by the splice command*/
  let origLength = arr.length;
  /*loop through array and chop off the first (size) of elements and   push them to a two dimensional array*/
  for (var i = 0; i < origLength; i += size) {
    twoDim.push(arr.slice(0,size));
    arr.splice(0,size);
    console.log(twoDim);
    console.log('i = ' + i);
  }
  /*push remainder of items, if any*/
  if (arr.length > 0){
  twoDim.push(arr);
  }
  /*return final two dimensional array*/
  return twoDim;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
