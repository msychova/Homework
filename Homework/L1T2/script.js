var n = 23;

for(var i=2; i<=n/2; ++i){
	if(n%i==0)
        {
            console.log(n,' is not a prime number.');
            break;
        }
		else console.log(n,' is a prime number.');
        
}



