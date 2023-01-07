# is-prime-number

Node.js JavaScript module to determine whether the passed value is a prime number.

```bash
npm install is-prime-number
```

## Syntax
```javascript
isPrime(value);
```
### Parameters
- `value` The value to be tested for being a prime number.

### Return value
A `boolean` indicating whether or not the given value is a prime number.

## Examples
```javascript
const isPrime = require('is-prime-number');

console.log( isPrime(2) ); // true
console.log( isPrime(7) ); // true

console.log( isPrime(20) ); // false
console.log( isPrime({}) ); // false
```
