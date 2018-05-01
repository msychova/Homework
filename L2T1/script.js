var A = [-2, 3, 0, -7, 7, 1, 33, -12];
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
