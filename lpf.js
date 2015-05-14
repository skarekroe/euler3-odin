var isPrime = function(n)
{
	var prime = 0;
	var i = n-1;
	while(i > 1)
	{
		if (n % i === 0)
			return false;
		i--;
	}
	return true;
}

var lpf = function(n)
{
	m = n-1;
	while(m > 1)
	{
		if(n % m === 0 && isPrime(m))
			return m;
		m--;
	}
	return n;
}
console.log(lpf(1000));