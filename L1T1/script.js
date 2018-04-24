var x1;
var x2;
var a = 1;
var b = 1;
var c = -6;

var D = b**2 - 4*a*c;

if (D > 0) {
	x1 = (-b + Math.pow(D,1/2))/(2*a); 
	x2 = (-b - Math.pow(D,1/2))/(2*a); 
	console.log('Realis roots: x1=',x1,'; x2=',x2);
} else {
	if (D == 0){
		x1 = (-b)/(2*a);
		console.log('Realis roots: x1=x2=',x1);
	} else {
		console.log('No realis roots!');
	}
}



