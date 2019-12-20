function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map((obj)=>{
    var a = obj.avgAlt + earthRadius;
    var T = Math.round(2 * Math.PI * Math.sqrt((Math.pow(a, 3)/GM)));
    delete obj.avgAlt;
    obj.orbitalPeriod = T;
  })
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
