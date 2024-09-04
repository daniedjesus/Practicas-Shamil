# Practica 2
Este conjunto de ejercicios cubre varios aspectos fundamentales de JavaScript, incluyendo recursividad, manejo de fechas, control de flujo, manejo de errores, y el clásico problema de Fizz Buzz.

## Ejercicio 6: Recursividad
**Descripción:** Escribe una función recursiva que calcule el factorial de un número dado.

**Ejemplo:**
```javascript
function factorial(n) {
  // tu código aquí
}

console.log(factorial(5)); // 120
```

## Ejercicio 7: Manejo de Fechas
**Descripción:** Crea una función que tome dos objetos `Date` y devuelva la cantidad de días entre las dos fechas.

**Ejemplo:**
```javascript
function daysBetween(date1, date2) {
  // tu código aquí
}

console.log(daysBetween(new Date('2024-01-01'), new Date('2024-01-10'))); // 9
```

## Ejercicio 8: Control de Flujo y Condicionales
**Descripción:** Escribe una función que determine si una cadena de texto es un palíndromo. Ignora los espacios y la puntuación.

**Ejemplo:**
```javascript
function isPalindrome(str) {
  // tu código aquí
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
```

## Ejercicio 9: Manejo de Errores
**Descripción:** Escribe una función que intente convertir una cadena de texto en un número usando `parseInt`. Si la conversión falla, la función debe lanzar un error con un mensaje personalizado.

**Ejemplo:**
```javascript
function convertToNumber(str) {
  // tu código aquí
}

try {
  console.log(convertToNumber("123")); // 123
  console.log(convertToNumber("abc")); // Error: Cannot convert 'abc' to a number
} catch (error) {
  console.error(error.message);
}
```

## Ejercicio 10: Fizz Buzz
**Descripción:** Escribe una función que imprima los números del 1 al 100, pero para los múltiplos de 3 imprima "Fizz" en lugar del número, y para los múltiplos de 5 imprima "Buzz". Para los números que son múltiplos de ambos 3 y 5, imprima "FizzBuzz".

**Ejemplo:**
```javascript
function fizzBuzz() {
  // tu código aquí
}

fizzBuzz();
// Salida esperada: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", ...
```