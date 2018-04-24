var n = num = 1232; //number
var r; //reverse
var reminder;

r = 0;

while (n > 0) {
	reminder = n % 10;	
	r = r * 10 + reminder;
	n = Math.floor(n/10);	
}

console.log(num, '->', r);




