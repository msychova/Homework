var A = [ 1, 2, 1, 2, 3.14, 4, 2, 1];

var countedNums = A.reduce(function (allNums, num) { 
  if (num in allNums) {
    allNums[num]++;
  }
  else {
    allNums[num] = 1;
  }
  return allNums;
}, {});
console.log(countedNums);