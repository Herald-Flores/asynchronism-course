/**
 * Función Callback
 * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */

function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2)
}

console.log(calc(2, 2, sum))

setTimeout(function () {
  console.log('Hola JavaScript')
}, 5000)

function gretting(name) {
  console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Herald')
