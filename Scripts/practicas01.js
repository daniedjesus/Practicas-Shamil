//Ejercicio 1: Manipulación de Arrays
/*Descripción: Crea una función que tome un array de números como argumento y 
devuelva un nuevo array con todos los números duplicados eliminados. No se puede utilizar Set.*/



const removerDuplicado=(array)=>{
    let nuevoArray=[];
    for (let i = 0; i < array.length; i++) {

        if(nuevoArray.indexOf(array[i])=== -1){
            nuevoArray.push(array[i])
        }
        
        
    }
    return nuevoArray;
};

let arr1=[1,2,3,4,5,3,4,5];
console.log(removerDuplicado(arr1))

//Ejercicio 2: Promesas y Asincronía
/* Implementa una función que simule una operación asíncrona usando setTimeout para devolver una promesa que se 
resuelve después de 2 segundos. Luego, utiliza async/await para consumir esta promesa.*/

function asyncOperation(){
    return new Promise((resolve) => {
        setTimeout(()=>{ resolve("Operacion Preparada")},2000);
        
    });
}

async function consumeAsyncOperation() {
    console.log("Preparando operacion");
    const resultado=await asyncOperation();

    console.log(resultado)
    
}

consumeAsyncOperation();

//Ejercicio 3: Manipulación de Objetos
/*Descripción: Crea una función que tome un objeto y devuelva un nuevo objeto donde las claves y 
los valores estén intercambiados.*/

let originalObj = { a: "1", b: "2", c: "3" };

function invertObject(obj) {
    let invertedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
    
}
let invertedObj = invertObject(originalObj); 

console.log(invertedObj); 




//Ejercicio 4: Funciones de Orden Superior
/*Implementa una función mapCustom que funcione de manera similar al método Array.prototype.map,
 pero sin usar dicho método.*/


 function mapCustom(arr, callback) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i], i, arr));
    }
    return resultArray;
  }
  
  const result = mapCustom([1, 2, 3], x => x * 2);

  console.log(result); 


  //Ejercicio 5: Clausuras
  /* Escribe una función que devuelva otra función que incremente un contador en 1 cada vez que se llame. El valor del contador debe mantenerse 
  en el contexto de la clausura.*/

  function createCounter() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
  }}
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3


  //Ejercicio 6: Recursividad
  //Descripción: Escribe una función recursiva que calcule el factorial de un número dado.

  function factorial(n) {
    if(n==0 || n==1){
        return 1
    }
    else{
        return n *factorial(n-1)
    }
  }
  
  console.log(factorial(5));

//Ejercicio 7: Manejo de Fechas
//Descripción: Crea una función que tome dos objetos Date y devuelva la cantidad de días entre las dos fechas.

function daysBetween(date1, date2) {

    const unDia=24*60*60*1000;

    const diferencia=Math.abs(date1-date2);

    return Math.floor(diferencia/unDia);
    
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
  }
  
  catch (error) {
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