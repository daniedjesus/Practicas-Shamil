/* Ejercicio 1: Manipulación de Arrays */
function removeDuplicates(arr) {
    /* Modo 1 */
    // const map = {};

    // for (let i = 0; i < arr.length; i++) {
    //     map[arr[i]] = arr[i];
    // }

    // return Object.values(map);

    /* Modo 2 */
    // const map = arr.reduce((acc, item) => {
    //     acc[item] = item;
    //     return acc;
    // }, {});

    // return Object.values(map);

    /* Modo 3 (preserves order)*/
    // const seen = {};
    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (seen[arr[i]]) continue;

    //     seen[arr[i]] = true;
    //     result.push(arr[i]);
    // }

    // return result;
}

console.log(removeDuplicates([2, 0, 3, 4, 3, 1, 0])); // [2, 0, 3, 4, 1] if order is preserved
console.log(removeDuplicates([1, 2, 3, 2, 1])); // [1, 2, 3]

/* Ejercicio 2: Promesas y Asincronía */
function asyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async operation result');
        }, 2000);
    });
}

async function consumeAsyncOperation() {
    /* Modo 1 */
    // asyncOperation().then((result) => {
    //     console.log(result);
    // });

    /* Modo 2 */
    // asyncOperation().then(console.log);

    /* Modo 3 */
    // console.log(await asyncOperation());

    /* Modo 4 */
    // const result = await asyncOperation();
    // console.log(result);
}

consumeAsyncOperation();

/* Ejercicio 3: Manipulación de Objetos */
function invertObject(obj) {
    const newObj = {};

    /* Modo 1 */
    // for (const key in obj) {
    //     newObj[obj[key]] = key;
    // }

    /* Modo 2 */
    // Object.entries(obj).forEach(([key, value]) => {
    //     newObj[value] = key;
    // });

    /* Modo 3 */
    // Object.keys(obj).forEach((key) => {
    //     newObj[obj[key]] = key;
    // });

    return newObj;
}

console.log(invertObject({ a: 1, b: 2, c: 3 }));

/* Ejercicio 4: Funciones de Orden Superior */
function mapCustom(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
}

const result = mapCustom([1, 2, 3], x => x * 2);
console.log(result); // [2, 4, 6]

/* Ejercicio 5: Clausuras */
function createCounter() {
    let counter = 0;

    /* Modo 1 */
    // return function() {
    //     return ++counter;
    // };

    /* Modo 2 */
    return () => ++counter;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
