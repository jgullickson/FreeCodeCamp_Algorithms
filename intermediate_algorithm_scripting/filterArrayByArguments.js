function destroyer(arr) {
  return arr.filter(item => ![...arguments].includes(item))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);