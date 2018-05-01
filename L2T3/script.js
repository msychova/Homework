var A = [-2, 3, 0, -7, 7, 1, 33, -12, 1, 2, 1, 2, 3.14, 4, 2, 1];

function L2T1(A){
	
	var B = [];
	var C = [];

	var B = A.filter(function (number) {
	 return number > 0;
	});
	console.log('Positive numbers:' + B);

	var C = A.filter(function (number) {
	 return number < 0;
	});
	console.log('Negative numbers:' + C);
}

function L2T2(A){

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
}

L2T1(A);
L2T2(A);