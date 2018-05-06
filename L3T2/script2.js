let string1 = "melon";
let string2 = "lemonn";
let anagram = true;

string1.length != string2.length ? console.log('Not anagrams') : anagram = false;

let arr1 = string1.split('');
let arr2 = string2.split('');

arr1.sort();
arr2.sort();

for(let i = 0; i <= arr1.length; i ++){
	if( arr1[i] == arr2[i] ){
		anagram = true;		
	}
	else{
		console.log(`${string1} and ${string2} are NOT anagrams!`);
		anagram = false;
	 	break;
	}
}

if (anagram) {
	console.log(`${string1} and ${string2} are anagrams!`);
}

