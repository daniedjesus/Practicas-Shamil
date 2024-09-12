### Ejercicio 1: Uso de `arguments`
- **Descripción**: Escribe una función `sumarTodo` que acepte un número variable de argumentos utilizando la propiedad `arguments` (sin usar los parámetros rest `...`). La función debe devolver la suma de todos los argumentos recibidos. Ejemplo:
  ```js
  sumarTodo(1, 2, 3, 4); // Resultado: 10
  sumarTodo(5, 10, 15); // Resultado: 30
  ```

---

### Ejercicio 2: **Métodos avanzados de arrays (`map`, `reduce`, `filter`):**
- **Descripción**: Dado un array de objetos que representan productos, escribe una función que devuelva un array de nombres de productos cuyo precio sea mayor a 100. Usa los métodos `filter` y `map` para lograrlo. Luego, usa `reduce` para calcular el total del precio de esos productos filtrados.
  ```js
  const productos = [
    { nombre: 'Laptop', precio: 1500 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 300 },
  ];
  ```

---

### Ejercicio 3: Decorador de "delay"
- **Descripción**: Escribe una función `delay` que actúe como decorador y retrase la ejecución de una función dada por un tiempo específico. Usa `setTimeout` para lograr el retraso.
  
  **Instrucciones**:
  - La función `delay` debe tomar dos argumentos: la función original y el tiempo en milisegundos para el retraso.
  - Devuelve una nueva función que, cuando sea llamada, espere el tiempo especificado antes de ejecutar la función original.

  **Ejemplo**:
  ```js
  function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
  }

  const saludarConDelay = delay(saludar, 2000);
  saludarConDelay('Juan'); // Después de 2 segundos: "Hola, Juan"
  ```

---

### Ejercicio 4: Mapeo de propiedades de objetos
- **Descripción**: Crea una función `mapearObjeto` que mapee las propiedades de un objeto a otras propiedades. Por ejemplo, convierte la propiedad `name` en `fullName`, y agrega una nueva propiedad como `ageGroup` basada en la edad del usuario.

  **Instrucciones**:
  - La función debe recibir un objeto con propiedades `name` y `age`.
  - La nueva propiedad `fullName` debe copiar el valor de `name`.
  - Agrega una propiedad `ageGroup` que clasifique a la persona en `"niño"`, `"adulto"`, o `"anciano"` dependiendo de la edad (menor de 18 es "niño", entre 18 y 65 es "adulto", y mayor de 65 es "anciano").

  **Ejemplo**:
  ```js
  const usuario = { name: 'Carlos', age: 30 };
  const nuevoUsuario = mapearObjeto(usuario);
  console.log(nuevoUsuario); 
  // { fullName: 'Carlos', age: 30, ageGroup: 'adulto' }
  ```

---

### Ejercicio 5: Transformar Linked List a Array
- **Descripción**: Dado un linked list, escribe una función `linkedListToArray` que lo convierta en un array. Un linked list tiene nodos que contienen un valor y una referencia al siguiente nodo.

  **Instrucciones**:
  - La lista enlazada tiene la estructura `{ value, next }`, donde `value` es el valor del nodo y `next` es la referencia al siguiente nodo.
  - La función debe recorrer la lista y devolver un array con los valores de cada nodo.

  **Ejemplo**:
  ```js
  const linkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  };

  const array = linkedListToArray(linkedList);
  console.log(array); // [1, 2, 3]
  ```