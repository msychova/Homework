var string1 = "melon";
var string2 = "lemon";
var anagram = true;

if (string1.length != string2.length){
	console.log('Not anagrams');
	anagram = false;
}

var arr1 = string1.split('');
var arr2 = string2.split('');

arr1.sort();
arr2.sort();

for(var i = 0; i <= arr1.length; i ++){
	if( arr1[i] == arr2[i] ){
		anagram = true;		
	}
	else{
		console.log(string1 + ' and ' + string2 + ' are NOT anagrams!');
		anagram = false;
	 	break;
	}
}

if (anagram == true) {
	console.log(string1 + ' and ' + string2 + ' are anagrams!');
}

