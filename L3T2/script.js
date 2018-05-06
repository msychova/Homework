let A = [-2, 3, 0, -7, 7, 1, 33, -12, 1];

function L2T1(A){
	
	let B = [];
	let C = [];

	B = A.filter(number => (number > 0));	
	console.log(`Positive numbers: ${B}`);
	
	C = A.filter(number => (number < 0));	
	console.log(`Negative numbers: ${C}`);
}

function L2T2(A){

	let countedNums = A.reduce(function (allNums, num) { 
		
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