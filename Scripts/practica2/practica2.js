//Ejercicio 6: Recursividad
//Descripción: Escribe una función recursiva que calcule el factorial de un número dado.

function factorial2(n) {
  // using reduce
  // return Array.from({length: n}).reduce((acc, _, i) => (i+1) * acc, 1);

  return reduceMy(Array.from({ length: n }), (acc, _, i) => {
    return (i + 1) * acc;
  }, 1);
}

//custom reduce method
function reduceMy(array, metodo, valorInicial) {
  let accumulator = valorInicial;

  for (let i = 0; i < array.length; i++) {
    accumulator += metodo(accumulator, array[i], i, array);
  }

  return accumulator;
}

//factorial using while loop
function factorialClasico(n) {
  let accumulator = 1;

  while (n > 0) {
    accumulator = accumulator * n;
    n = n - 1;
  }

  return accumulator;
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1
  }
  else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(5));

//Ejercicio 7: Manejo de Fechas
//Descripción: Crea una función que tome dos objetos Date y devuelva la cantidad de días entre las dos fechas.

function daysBetween(date1, date2) {

  const unDia = 24 * 60 * 60 * 1000;

  const diferencia = Math.abs(date1 - date2);

  return Math.floor(diferencia / unDia);

}

console.log(daysBetween(new Date('2024-01-01'), new Date('2024-01-10'))); // 9

//Ejercicio 8: Control de Flujo y Condicionales
/*Descripción: Escribe una función que determine si una cadena de texto es un palíndromo. 
Ignora los espacios y la puntuación.*/

function isPalindrome(str) {
  const cadenaLimpia = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const cadenaReversa = cadenaLimpia.split('').reverse().join('');

  return cadenaLimpia === cadenaReversa;
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false

// Ejercicio 9: Manejo de Errores
/*Descripción: Escribe una función que intente convertir una cadena de texto en un número usando parseInt. 
Si la conversión falla, la función debe lanzar un error con un mensaje personalizado.*/

function convertToNumber(str) {
  const numero = parseInt(str, 10);
  if (isNaN(numero)) {
    throw new Error(`Cannot convert "${str}" to a number.`);
  }

  return numero;
}

try {
  console.log(convertToNumber("123abc")); // 123
  console.log(convertToNumber("abc")); // Error: Cannot convert 'abc' to a number
} catch (error) {
  console.error(error.message);
}

//Ejercicio 10: Fizz Buzz
/*Descripción: Escribe una función que imprima los números del 1 al 100, pero para los 
múltiplos de 3 imprima "Fizz" en lugar del número, y para los múltiplos de 5 imprima "Buzz". 
Para los números que son múltiplos de ambos 3 y 5, imprima "FizzBuzz".*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

}

fizzBuzz();