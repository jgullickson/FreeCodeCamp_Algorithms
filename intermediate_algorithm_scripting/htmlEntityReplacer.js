function convertHTML(str) {
  // &colon;&rpar;
  let crosswalk = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;',
  }
  return str.replace(/&|<|>|"|'/g, (char) => crosswalk[char])
}

convertHTML("Dolce & Gabbana");
