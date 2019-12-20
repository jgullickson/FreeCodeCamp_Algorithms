function frankenSplice(arr1, arr2, n) {
    let arrCombo = [...arr2];
    for (var i = 0; i < arr1.length; i++) {
      arrCombo.splice(n + i, 0, arr1[i]);
    }
    return arrCombo;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);