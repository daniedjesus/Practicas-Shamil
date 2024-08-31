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
