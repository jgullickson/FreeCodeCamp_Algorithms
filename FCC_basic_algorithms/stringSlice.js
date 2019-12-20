function truncateString(str, num) {
  if (str.length > num) {
    let sliceStr = str.slice(0, num);
    sliceStr += '...';
    console.log(sliceStr);
    return sliceStr;
  }
  else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
