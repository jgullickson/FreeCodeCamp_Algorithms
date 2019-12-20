function pairElement(str) {
  return str
  .split('')
  .map((pair)=>{
    if (pair[0] === 'G'){
      return [pair, 'C'];
    } else if (pair[0] === 'C') {
      return [pair, 'G'];
    } else if (pair[0] === 'A'){
      return [pair, 'T'];
    } else if (pair[0] === 'T'){
      return [pair, 'A'];
    }
  })
  
}

pairElement("GCG");
