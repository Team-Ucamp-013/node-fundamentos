const tap = require('tap');
const isPrime = require('./index.js');

const primes = [2,3,7,11,103,197,199];
primes.forEach((i) => {
	tap.ok(isPrime(i));
});

const nonPrimes = [1,4,100,'foo',true, {bar:1}, []];
nonPrimes.forEach((i) => {
	tap.notOk(isPrime(i));
});
