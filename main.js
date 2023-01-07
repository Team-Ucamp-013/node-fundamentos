// console.log('hola mundo')

// console.log('Jugando con NodeJs')

// const operacion = require('./suma.js')

// console.log(operacion)

// const operacion = require('./calculadora.js')
// console.log(operacion.suma(5, 30))
// console.log(operacion.multiplicacion(5, 30))

// const moment = require('moment')

// console.log(moment().format("dddd, Do MM of YYYY,hh:mm:ss"))

const isPrime = require('is-prime-number');

console.log(isPrime(2)); // true
console.log(isPrime(7)); // true

console.log(isPrime(20)); // false
console.log(isPrime({})); // false


const request = require('request');
const fs = require('fs');

fs.readFile('./link.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data)
  request(data, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
});










