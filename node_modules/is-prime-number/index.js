/**
 * Check if number provided is a prime number
 * @param {int} num
 * @return {boolean} number is prime
 */
const isPrime = (num) => {
	if (!Number.isInteger(num))
		return false;

	// Prime numbers are whole, non-negative numbers
	// 1 is a composite number (not prime as it's only divisible by itself)
	if (num < 2)
		return false;

	// 2 is the first prime number
	if (num === 2)
		return true;

	// Excluding 2 no even number can be prime
	if (num % 2 === 0)
		return false;

	// Run divisibility tests up to and including it's square root
	const sqrt = Math.sqrt(num);
	for (let i = 3; i <= sqrt; i++) {
		if(num % i === 0)
			return false;
	}
	return true;
};

module.exports = isPrime;
